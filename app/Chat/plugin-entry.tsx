import React from 'react';
import { createRoot } from 'react-dom/client';
import Chat from './page';

/**
 * Universal Plugin Loader
 * 
 * This script automatically creates a container and mounts the Chat component
 * when loaded onto any web page.
 */
function initChatPlugin() {
    // 1. Create a unique container for the chat plugin
    const containerId = 'universal-chat-plugin-root';
    let container = document.getElementById(containerId);

    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        document.body.appendChild(container);
    }

    // 2. Mount the React Chat component
    const root = createRoot(container);
    root.render(<Chat />);

    console.log('🚀 Chat Plugin Initialized Successfully');
}

// Initialize when the script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatPlugin);
} else {
    initChatPlugin();
}
