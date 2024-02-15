import './walletinfo.css';
import React, { useState, useEffect } from 'react';
import { Keypair } from '@solana/web3.js';

const WalletInfo = () => {
    const [privateKey, setPrivateKey] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const [balance, setBalance] = useState(0);
    const [generated, setGenerated] = useState(false);
    const [lastClicked, setLastClicked] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const [textAreaVisible, setTextAreaVisible] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    useEffect(() => {
        const storedPrivateKey = localStorage.getItem('privateKey');
        if (storedPrivateKey) {
            setPrivateKey(storedPrivateKey);
            setGenerated(true);
            // Для примера, здесь вы могли бы выполнить запрос к блокчейну,
            // чтобы получить баланс для отображения
            setBalance(100); // Здесь предполагается, что баланс равен 100 для примера
        }
    }, []);

    const handleGeneratePrivateKey = () => {
        // Генерация приватного ключа
        const keypair = Keypair.generate();
        const generatedPrivateKey = keypair.secretKey;
        const privateKeyArray = new Uint8Array(generatedPrivateKey);
        const privateKeyBase64 = btoa(String.fromCharCode.apply(null, privateKeyArray));
        setPrivateKey(privateKeyBase64);
        setGenerated(true);
        setTextAreaValue(privateKeyBase64);
        localStorage.setItem('privateKey', privateKeyBase64);
    };

    const handleDeposit = () => {
        // Здесь обычно вы отправляете публичный ключ на сервер,
        // чтобы получить адрес для пополнения или выполняете другие действия
        const keypair = Keypair.fromSecretKey(Uint8Array.from(atob(privateKey), c => c.charCodeAt(0)));
        setPublicKey(keypair.publicKey.toString());
        setLastClicked('deposit');
        setTextAreaValue(keypair.publicKey.toString());
        setTextAreaVisible(true);
    };

    const handleExportPrivateKey = () => {
        // Обработка экспорта приватного ключа
        setLastClicked('export');
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
            {generated ? (
                <div className='solana_walletconnect'>
                    <p>Balance: {balance} SOL</p>
                    <button onClick={handleDeposit}>Deposit</button>
                    <button onClick={handleExportPrivateKey}>Export</button>
                    {textAreaVisible && (
                        <div>
                            <textarea
                                value={textAreaValue}
                                readOnly
                                style={{ width: '35vh', maxWidth: '100vh', border: '1px solid orange',
                                borderRadius: '5px'}}
                            />
                            <button onClick={handleCopyToClipboard}>Copy {copySuccess && '✅'}</button>
                        </div>
                    )}
                </div>
            ) : (
                <button onClick={handleGeneratePrivateKey}>Generate Private Key</button>
            )}
        </div>
    );
};

export default WalletInfo;
