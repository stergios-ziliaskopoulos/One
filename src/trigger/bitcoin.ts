import { schedules, logger } from "@trigger.dev/sdk/v3";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const bitcoinPriceTask = schedules.task({
    id: "bitcoin-price-logger",
    // Run every minute
    cron: "* * * * *",
    run: async (payload) => {
        try {
            const response = await fetch(
                "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
            );

            if (!response.ok) {
                logger.error("Failed to fetch Bitcoin price", {
                    status: response.status,
                    statusText: response.statusText,
                });
                return;
            }

            const data = await response.json();
            const price = data.bitcoin.usd;
            const date = new Date().toISOString();

            logger.info(`Bitcoin Price: $${price} at ${date}`, {
                price,
                timestamp: date,
            });

            if (price < 10000) {
                logger.info("Price is below 100k, sending email...");
                await resend.emails.send({
                    from: "onboarding@resend.dev",
                    to: "szilias@gmail.com",
                    subject: "🚨 Bitcoin Alert!",
                    html: `<p>Bitcoin Price is less than 100k: <strong>$${price}</strong></p>`,
                });
            }
        } catch (error) {
            logger.error("Error fetching Bitcoin price or sending email", { error });
        }
    },
});
