<?php
// Simple 404 handler for static sites on PHP servers
$request = $_SERVER['REQUEST_URI'];
$file_path = __DIR__ . parse_url($request, PHP_URL_PATH);

// Remove query parameters
$clean_path = parse_url($request, PHP_URL_PATH);

// Check if it's a direct request for 404.html
if ($clean_path === '/404.html') {
    http_response_code(404);
    include __DIR__ . '/404.html';
    exit;
}

// Check if the requested file exists
if (file_exists($file_path)) {
    if (is_dir($file_path)) {
        // Check for index.html in directory
        if (file_exists($file_path . '/index.html')) {
            include $file_path . '/index.html';
            exit;
        }
    } else {
        // File exists, let the server handle it
        return false;
    }
}

// File doesn't exist, serve 404
http_response_code(404);
if (file_exists(__DIR__ . '/404.html')) {
    include __DIR__ . '/404.html';
} else {
    echo '<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>404 - Page Not Found</h1></body></html>';
}
exit;
?>
