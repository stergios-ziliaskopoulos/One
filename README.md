# Bitcoin Price Alert Bot

Ένα πλήρως αυτοματοποιημένο σύστημα Backend που παρακολουθεί την αγορά κρυπτονομισμάτων σε πραγματικό χρόνο και στέλνει άμεσες ειδοποιήσεις.

## Τι λύνει αυτό το Bot
Οι επενδυτές χάνουν ευκαιρίες επειδή δεν μπορούν να κοιτούν την οθόνη 24/7.
Αυτό το bot λειτουργεί ως **"Ψηφιακός Βοηθός"** που:
1.  **Παρακολουθεί:** Τσεκάρει την τιμή του Bitcoin κάθε λεπτό (μέσω CoinGecko API).
2.  **Αναλύει:** Συγκρίνει τιμές με βάση τη στρατηγική του χρήστη.
3.  **Ειδοποιεί:** Στέλνει Email Alerts σε πραγματικό χρόνο (μέσω Resend).

## Τεχνολογίες (Tech Stack)
* **Γλώσσα:** TypeScript / Node.js
* **Cloud Platform:** Trigger.dev (Serverless)
* **APIs:** CoinGecko, Resend
* **Architecture:** Event-Driven / Cron Jobs

## Ασφάλεια
Όλα τα ευαίσθητα δεδομένα (API Keys) προστατεύονται μέσω Environment Variables (.env) και δεν εκτίθενται στον κώδικα.

---
*Created by Stergios Ziliaskopoulos - Automation Engineer*