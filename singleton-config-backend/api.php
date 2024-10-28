<?php
include 'config.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

// Get the Singleton instance of Config
$config = Config::getInstance();

// Create an associative array of the current config settings
$configData = [
    'app_name' => $config->get('app_name'),
    'version' => $config->get('version'),
    'environment' => $config->get('environment'),
    'db_host' => $config->get('db_host'),
    'db_user' => $config->get('db_user'),
    'db_password' => $config->get('db_password')
];

// Return the configuration settings as a JSON response
echo json_encode($configData);
?>