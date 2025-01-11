import React, { useState } from 'react';

export function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className="error-container">
                <h2>Something went wrong!</h2>
                <button onClick={() => window.location.reload()}>
                    Try again
                </button>
            </div>
        );
    }

    return children;
} 