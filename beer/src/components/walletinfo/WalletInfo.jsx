import './walletinfo.css';
import React, { useState, useEffect } from 'react';
import { Keypair, Connection, SystemProgram, Transaction, PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import ConnectionStatus from './ConnectionStatus'; // Импортируем компонент ConnectionStatus


const WalletInfo = () => {
    const [privateKey, setPrivateKey] = useState('');
    const [balance, setBalance] = useState(0);
    const [generated, setGenerated] = useState(false);
    const [textAreaValue, setTextAreaValue] = useState('');
    const [textAreaVisible, setTextAreaVisible] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    useEffect(() => {
        const storedPrivateKey = localStorage.getItem('generatedWalletPrivateKey');
        if (storedPrivateKey) {
            setPrivateKey(storedPrivateKey);
            setGenerated(true);
        }
    }, []);



    const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=59dcc64e-6eaa-4d48-b97e-407c2792cb52');
    const { publicKey: userWalletPublicKey, sendTransaction, signTransaction, connected } = useWallet();

    const handleGeneratePrivateKey = () => {
        // Генерация приватного ключа
        const keypair = Keypair.generate();
        const generatedPrivateKey = keypair.secretKey;
        const privateKeyArray = new Uint8Array(generatedPrivateKey);
        const privateKeyBase64 = btoa(String.fromCharCode.apply(null, privateKeyArray));
        
        // Преобразование приватного ключа в публичный ключ
        const publicKey = Keypair.fromSecretKey(generatedPrivateKey).publicKey;
        
        // Преобразование публичного ключа в адрес base58
        const publicKeyBase58 = publicKey.toBase58();

        // Установка приватного ключа и адреса в состояние и локальное хранилище
        setPrivateKey(privateKeyBase64);
        setGenerated(true);
        setTextAreaValue(privateKeyBase64);
        localStorage.setItem('generatedWalletPrivateKey', privateKeyBase64);
        localStorage.setItem('generatedWalletAddress', publicKeyBase58);
    };

    const handleDeposit = async () => {
        if (connected) {
            try {
                const fromPublicKey = userWalletPublicKey;
                const storedAddress = localStorage.getItem('generatedWalletAddress');
                if (!storedAddress) {
                    console.error('Сгенерированный адрес кошелька не найден в локальном хранилище');
                    return;
                }
                const toPublicKey = new PublicKey(storedAddress);
                //const amount = 10; // Сумма в lamports (1 SOL = 1000000000 lamports)
                let amount = 0; // form

                const sourceWalletInfo = await connection.getAccountInfo(new PublicKey("5LmtL37umzCRHCCNheBFZrKsEhBjDrW8xVUwrFhwFpRK"));
                console.log(sourceWalletInfo)

                const targetWalleNotExists = !(await connection.getAccountInfo(toPublicKey));
                if (targetWalleNotExists) {
                    const minimumAmount = await connection.getMinimumBalanceForRentExemption(128);
                    console.log('Minimal amount is', minimumAmount);
                    if (amount < minimumAmount) {
                        amount = minimumAmount;
                    }
                }

                const blockhash = await connection.getLatestBlockhash('confirmed');

                console.log(blockhash, userWalletPublicKey.toBase58());

                // Создание транзакции
                const transaction = new Transaction({
                    recentBlockhash: blockhash.blockhash,
                    feePayer: userWalletPublicKey,
                }).add(
                    SystemProgram.transfer({
                        fromPubkey: fromPublicKey,
                        toPubkey: toPublicKey,
                        lamports: amount,
                    })
                );

                // Подпись и отправка транзакции
                // const signature = await sendAndConfirmTransaction(
                //     connection,
                //     transaction,
                //     [new Uint8Array(privateKey)] // Подписываем транзакцию с использованием приватного ключа
                // );
                // const signature = await sendTransaction(transaction, connection);
                const signedTx = await signTransaction(transaction);
                const compiledTransaction = signedTx.serialize();
                const signature = await connection.sendRawTransaction(compiledTransaction, { preflightCommitment: 'confirmed'});

                alert('done')

                console.log('Транзакция успешно выполнена, подпись:', signature);
            } catch (error) {
                console.error('Ошибка транзакции:', error);
            }
        } else {
            console.error('Кошелек не подключен');
        }
    };

    const handleExportPrivateKey = () => {
        // Обработка экспорта приватного ключа
        setTextAreaValue(privateKey);
        setTextAreaVisible(true);
    };

    const handleCopyToClipboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = textAreaValue;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 2000);
    };

    return (
        <div className='solana_wallet'>
            <h1>Solana Wallet Info</h1>
            <ConnectionStatus /> {/* Вставляем компонент ConnectionStatus здесь */}
            {generated ? (
                <div className='solana_walletconnect'>
                    <p>Баланс: {balance} SOL</p>
                    <button onClick={handleDeposit}>Депозит</button>
                    <button onClick={handleExportPrivateKey}>Экспорт</button>
                    {textAreaVisible && (
                        <div>
                            <textarea
                                value={textAreaValue}
                                readOnly
                                style={{ width: '35vh', maxWidth: '100vh', border: '1px solid orange',
                                borderRadius: '5px'}}
                            />
                            <button onClick={handleCopyToClipboard}>Копировать {copySuccess && '✅'}</button>
                        </div>
                    )}
                </div>
            ) : (
                <button onClick={handleGeneratePrivateKey}>Сгенерировать приватный ключ</button>
            )}
        </div>
    );
};

export default WalletInfo;
