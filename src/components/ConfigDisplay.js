import React, { useEffect, useState } from 'react';
import './ConfigDisplay.css'; // Import the CSS file

const ConfigDisplay = () => {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        const fetchConfig = async () => {
            const response = await fetch('http://localhost/singleton-config-backend/api.php');
            const data = await response.json();
            setConfig(data);
        };
        fetchConfig();
    }, []);

    if (!config) {
        return <div>Loading...</div>;
    }

    return (
        <div className="config-container">
            <h2>Application Configuration</h2>
            <ul>
                <li><strong>App Name:</strong> {config.app_name}</li>
                <li><strong>Version:</strong> {config.version}</li>
                <li><strong>Environment:</strong> {config.environment}</li>
                <li><strong>Database Host:</strong> {config.db_host}</li>
                <li><strong>Database User:</strong> {config.db_user}</li>
                <li><strong>Database Password:</strong> {config.db_password}</li>
            </ul>
        </div>
    );
};

export default ConfigDisplay;
