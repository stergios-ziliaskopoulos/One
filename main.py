import requests
import sys
import csv
import os
import time
from datetime import datetime

def get_bitcoin_price():
    url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()
        price = data.get('bitcoin', {}).get('usd')
        
        if price:
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            csv_file = 'prices.csv'
            file_exists = os.path.isfile(csv_file)
            
            try:
                with open(csv_file, mode='a', newline='') as file:
                    writer = csv.writer(file)
                    if not file_exists:
                        writer.writerow(['Timestamp', 'Price'])
                    writer.writerow([timestamp, price])
                print(f"Logged Bitcoin Price: ${price} at {timestamp}")
            except IOError as e:
                print(f"Error writing to file: {e}")
        else:
            print("Error: Could not retrieve Bitcoin price from response.")
            
    except requests.exceptions.RequestException as e:
        print(f"Error fetching Bitcoin price: {e}")
        # sys.exit(1) removed to keep the loop running

if __name__ == "__main__":
    while True:
        get_bitcoin_price()
        print("[WAITING] Waiting 60 seconds...")
        time.sleep(60)
