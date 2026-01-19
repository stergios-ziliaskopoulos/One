# Bitcoin Price Alert Bot

A fully automated backend system that monitors cryptocurrency markets in real-time and sends instant alerts via email.

## 🎯 Project Overview
This project solves the problem of constant manual market monitoring. It acts as a 24/7 digital assistant that tracks Bitcoin prices and notifies the investor immediately when specific conditions are met.

## ⚙️ How It Works
* **Real-Time Monitoring:** Fetches live data from the **CoinGecko API** every 60 seconds.
* **Logic & Analysis:** Compares current prices against user-defined thresholds (Buy/Sell signals).
* **Instant Alerts:** Triggers immediate email notifications using the **Resend API**.
* **Cloud Execution:** Deployed on **Trigger.dev** as a serverless background job (no local server required).

## 🛠️ Tech Stack
* **Language:** TypeScript / Node.js
* **Framework:** Trigger.dev (Serverless)
* **APIs:** CoinGecko (Data), Resend (Email)
* **Security:** Environment Variables (`.env`) for API key protection

---
*Developed by Stergios Ziliaskopoulos - Automation Engineer*