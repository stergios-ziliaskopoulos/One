# Bitcoin Price Alert Bot 🚀

Ένα αυτοματοποιημένο σύστημα που παρακολουθεί την αγορά κρυπτονομισμάτων σε πραγματικό χρόνο και στέλνει ειδοποιήσεις.

## 🛠️ Τι κάνει αυτό το Bot
Αυτό το project τρέχει στο Cloud (Trigger.dev) και εκτελεί τις εξής εργασίες αυτόματα:
* **Παρακολούθηση:** Ελέγχει την τιμή του Bitcoin κάθε 1 λεπτό μέσω του **CoinGecko API**.
* **Λογική:** Συγκρίνει την τρέχουσα τιμή με προκαθορισμένα όρια αγοράς/πώλησης.
* **Ειδοποίηση:** Στέλνει άμεσο Email Alert στον χρήστη μέσω του **Resend API** μόλις εντοπίσει ευκαιρία.

## 💻 Τεχνολογίες που χρησιμοποιήθηκαν
* **Γλώσσα:** TypeScript
* **Cloud Platform:** Trigger.dev (Serverless Architecture)
* **APIs:** CoinGecko (Data), Resend (Email Infrastructure)
* **Scheduling:** Cron Jobs

## 🎯 Στόχος Project
Ανάπτυξη ενός backend automation tool για real-time παρακολούθηση δεδομένων χωρίς την ανάγκη 24/7 ανοιχτού υπολογιστή.