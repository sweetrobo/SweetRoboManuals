# Inventory Management

The **Inventory** screen is where you manage all aspects of your candy and cup stock, including defining candy sets, managing individual candy details (names, images, stock levels, bay assignments), and updating cup stock.

![][inventoryoverview]

**Screen Overview:**

* **(1) Back Arrow & Title:** The back arrow icon returns you to the previous menu. 
* **(2) Candy Sets:** Lists pre-defined combinations of candies.
* **(3) Candy Management:** Lists individual candies assigned to each bay.
* **(4) Cup Stock:** Displays and allows editing of the current cup inventory.

**Candy Sets**

This section allows you to view, and edit "Candy Sets," which are pre-defined combinations that customers can select (e.g., "3 Candies”, "5 Candies").

**Viewing Candy Sets:**

* **Name:** The display name of the candy set (e.g., "3 Candies," "5 Candies").
* **Price:** The price for this set.
* **Flavors (Serving Count):** The number of individual candy servings included in this set.
* **Status:** Indicates if the set is "Enabled" (available to customers) or "Disabled."
* **Edit Icon (Pencil):** Tap this icon next to a set to modify its details.

**Editing a Candy Set:**

1. Tap the **pencil icon** next to the Candy Set you wish to edit.
2. The "Edit Candy Set" popup will appear:

![][PastedGraphic7]

    * **Name:** Enter or modify the display name for the set (e.g., "3 Candies").
    * **Price:** Enter or modify the price for this entire set. Setting this to 0 will make it “Free”.
    * **Serving Count:** Enter the number of individual candy items this set will dispense (this corresponds to "Flavors" in the list view).
    * **Status:**
    * **Enable:** Select this radio button to make the set available for customers to purchase.
    * **Disable:** Select this radio button to hide this set from customers.
    * **Save Button:** Tap to save your changes and close the popup.
    * **Cancel Button:** Tap to discard any changes and close the popup.

**Candy Management**

This section allows you to manage individual candy types, assign them to specific bays, update their stock levels, and set their display names and images.

**Viewing Candy Details:**

* **Bay:** The physical bay number (1-6) where the candy is located.
* **Image Icon (Picture):** A small preview image of the candy.
* **Name:** The display name of the candy (e.g., "M&Ms," "Skittles").
* **candy (Candy ID):** A unique identification number for the candy type (e.g., 600202).
* **Stock:** The current estimated stock level for that candy, shown as an approximate percentage of remaining quantity. (e.g., "56%", "11%").
* **Status:** Indicates if the candy in this bay is active/available ("True") or inactive ("False").
* **Plus Icon (+):** Tap this to add a new candy type.
* **Edit Icon (Pencil):** Tap this icon next to a candy entry to modify its details.

**Adding a New Candy to a Bay:**

1. Tap the **Plus icon** in the "Candy Management" section header.
2. This will open the "Edit Inventory" screen (similar to editing, but fields will be blank and ready for new input). Fill in the details as described below.

**Editing Candy Details / Inventory:**

1. Tap the **pencil icon** next to the candy entry in the bay you wish to edit.
2. The "Edit Inventory" screen/popup will appear:

![][editcandyitem]

    * **Main Image:** Displays the primary image shown to customers for this candy.
        * Tap the **pencil icon** next to "Main Image" to upload or change this image (e.g., 730x730 PNG).
    * **Cup Image:** Displays an image of the candy as it might appear in a cup, potentially used in other parts of the UI or marketing.
        * Tap the **pencil icon** next to "Cup Image" to upload or change this image (e.g., 730x300 PNG).
    * **Name:** Enter or modify the display name of the candy (e.g., "M&Ms").
    * **Candy ID:** Displays the unique identifier for this candy type (e.g., 600202). Reach out to our support team to double check the ID for the candy you are editing.
    * **Bay:** Select the physical bay number where this candy is (or will be) located. This is a dropdown list showing the bay number and currently assigned candy (e.g., "6: M&Ms").
    * **Stock:** Enter the approximate percentage of this candy in the bay (e.g., “56”, without the % sign). This is an estimated value. Update this value as accurately as you can after refilling.
    * **Save Button:** Tap to save your changes.
    * **Cancel Button:** Tap to discard any changes.

**Cup Stock**

This section displays the current cup inventory and allows you to update it after refilling.

**Viewing Cup Stock:**

* The screen displays the current estimated cup stock versus the maximum capacity (e.g., "10 / 200 cups available").
    * **Note:** A negative value like “-10” could indicate an error in counting, a previous over-dispense without a stock update, or the machine dispensing more cups than the system thought were available. Ensure cups are refilled and the stock is updated accurately.
    * Cups are tracked for your convenience so you know when to refill the machine. If the stock is not synchronized, and there are more cups in the machine than indicated in the software, the machine sensors will allow users to continue buying candy. However, only when the sensors sense that there are not enough cups will the machine go into a mode that prevents new candy purchases.
* **Edit Icon (Pencil):** Tap this icon to edit the cup stock quantity.

**Editing Cup Stock:**

1. Tap the **pencil icon** next to the "Cup Stock" display.
2. The "Cup Stock Edit" popup will appear:

![][cupstockedit]

    * **Input Field:** Enter the current number of cups available in the machine (e.g., "200").
    * **Display Text:** Shows the maximum capacity (e.g., "/ 200 cups available").
    * **Save Button:** Tap to save the updated cup count. This will update the system's record of available cups.
    * **Cancel Button:** Tap to discard the change and close the popup.


[inventoryoverview]: inventoryoverview.jpg width=250px height=296px

[PastedGraphic7]: PastedGraphic7.png width=250px height=141px

[editcandyitem]: editcandyitem.jpg width=250px height=193px

[cupstockedit]: cupstockedit.jpg width=250px height=75px