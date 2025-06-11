"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>API Test Page</h1>
        
        <button 
          onClick={handleApiCall}
          disabled={loading}
          className={styles.primary}
        >
          {loading ? 'Loading...' : 'Call API'}
        </button>

        {data && (
          <pre className={styles.response}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </main>
    </div>
  );
}
