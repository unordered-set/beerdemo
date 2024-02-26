import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const ConnectionStatus = () => {
    const { connected } = useWallet();

    return (
        <div>
            {connected ? (
                <p style={{ color: '#A368D5' }}>Your Phantom Wallet Connected ✔️</p>
            ) : (
                <p style={{ color: 'orange' }}>Please, connect your Phantom.</p>
            )}
        </div>
    );
};

export default ConnectionStatus;
