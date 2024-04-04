```javascript
// URL of the REST API to fetch product updates
const API_URL = 'https://example.com/api/product-updates';

// Function to fetch product updates from the REST API
async function fetchUpdates() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const updates = await response.json();
        return updates;
    } catch (error) {
        console.error('Failed to fetch product updates:', error);
        return [];
    }
}

export { fetchUpdates };
```