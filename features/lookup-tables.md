---
title: Lookup tables
date: 2017-02-23 15:15:00 Z
---

# Lookup tables
Lookup tables (AKA cross reference tables) enable fast and easy lookup of frequently used data that are static and immutable.

Data in lookup tables is typically organized like a database table, with columns and rows of data. You can lookup an entry within the specified lookup table by using
* Any column
* Multiple columns

For example, if I'm trying to move accounting entries from my sales app Salesforce into my accounting app Intacct, I might find that both departments are using different account codes internally. In order to ensure data is synced accurately from Salesforce into Intacct, I would need to take the account codes from Salesforce, find the matching codes in Intacct, and create the Intacct accounting entries using the corresponding Intacct account codes. In the following table, any Salesforce entries coming in with the code 34267 will be written into Intacct under the code 6754.

![Example lookup table](/assets/images/features/lookup-tables/example-lookup-table.png)
*Lookup table with the account IDs in Salesforce, Intacct and account names*

Some other scenarios where you might need lookup tables:
* Given a city name, you want to get the zip code
* Conversion from metric to SI for distances
* Given a department, rank, retrieve vacation accrual rate

Lookup tables are enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

# Setting up your lookup tables
There are two ways to upload data into your lookup tables:
- Import an existing CSV file
- Add new entries manually
- Add new entries via a recipe

Note: Lookup tables are immutable and the existing entries cannot be modified or deleted.

## Importing an existing CSV file
The GIF below walks you through the process of creating a lookup table and loading it with data imported from a CSV file.

![Lookup1](/assets/images/features/lookup-tables/lookup-tables-1.gif)
*Creating a new lookup table and importing a CSV file*

## Adding new entries manually
You can manually enter additional lookup table entries.

![Lookup2](/assets/images/features/lookup-tables/lookup-tables-2.png)
*Click on the Add new entry button*

![Lookup3](/assets/images/features/lookup-tables/lookup-tables-3.png)
*A new, blank row will be generated for values to be entered*

## Adding new entries via a recipe
There is a special **Lookup table** connector that allows you to work with your tables via recipes. This connector support these actions:

* Lookup entry
* Search entries
* Add entry

- Lookup entry action
The lookup entry action allows you to search for an entry (a row in the lookup table) by any of its values. The lookup entry action behaves like a search - it retrieves a single entry - the first matching entry depending on the values passed in. Take note - if you have duplicated entries (i.e. your lookup will return more than one entry), only one entry will be retrieved.

In the example below, we have a table called **Vacation Rules** with 4 columns - vacation type, department ID, job code and job title.

![Lookup5](/assets/images/features/lookup-tables/lookup-tables-5.png)
*Using the lookup entry action in the recipe*

In the following gif, we configure the lookup entry table to search for a specific row that matches the values we have (in that job) for department ID and job code. In the subsequent step, we can see what's returned - a single entry with all 4 available values. If we were looking for the corresponding vacation type and job title, we can use those datapills from the datatree.

The following gif walks you through the flow of configuring the lookup entry action to retrieve a matching entry.

![Lookup6](/assets/images/features/lookup-tables/lookup-tables-6.gif)
*Configuring the action to lookup entries with the matching department ID and job code*

- Search entries action
The search entries action works like the lookup action. The difference is that where lookup action returns a single entry, the search entries action returns a list of entries.

Use this if you expect a list of matching entries to be returned, and wish to process the list accordingly.

- Add entry action
Add a new entry to an existing lookup table. You can use this action to keep your lookup tables updated, e.g. read newly created job titles from your human resources application and create a new entry for that job title in your lookup table.

![Lookup7](/assets/images/features/lookup-tables/lookup-tables-7.gif)
*Select the lookup table to write to and then input the values to provide for each cell of the row*

## Lookup table formulas
Instead of using an action step to carry out the entry lookup, you can also use a formula to lookup entries in your lookup table. This is efficient as the lookup can be done within the input field without requiring additional actions.

To use the formula, set the input field to formula mode, and enter the formula in this format:

lookup(`table name`,`column name for search`: `data pill`)[`column name for result`]

![lookup formula](/assets/images/features/lookup-tables/lookup-formula.gif)
*Using the lookup table formula to lookup entries in table Test*

## Limits
Each lookup table supports up to 5 columns of data. Each column can be used as a key to lookup the entry.

![Lookup4](/assets/images/features/lookup-tables/lookup-tables-4.png)
*Maximum of 5 data columns available*

There is a maximum of 5000 entries per lookup table.