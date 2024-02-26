import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const ConnectionStatus = () => {
    const { connected } = useWallet();

    return (
        <div>
            {connected ? (
                <p style={{ color: 'green' }}>Соединение с сетью Solana установлено.</p>
            ) : (
                <p>Подключение к сети Solana не установлено.</p>
            )}
        </div>
    );
};

export default ConnectionStatus;
