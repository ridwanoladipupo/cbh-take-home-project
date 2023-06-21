# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Add custom Agent ID field to the Facilities table

Description:
To enable Facilities to save their own custom IDs for each Agent they work with, we need to modify the Facilities table in the database to include a custom Agent ID field. This will allow Facilities to associate their own IDs with the Agents.

Acceptance Criteria:

The Facilities table should be modified to include a new column named "custom_agent_id" of an appropriate data type to store custom Agent IDs.
The custom_agent_id column should be nullable to allow Facilities to save custom IDs selectively.
The existing data in the Facilities table should be preserved during the modification process.

Time/Effort Estimate:

This task is estimated to take approximately 2 hours.

Implementation Details:

Analyze the existing Facilities table structure and data to determine the appropriate data type for the custom_agent_id column.
Develop a script or query to add the custom_agent_id column to the Facilities table.
Ensure that the new column is nullable.
Test the modification process on a development or staging environment.
Execute the script or query on the production database to apply the changes.

Ticket 2: Update getShiftsByFacility function to include custom Agent ID

Description:
To use the custom Agent IDs when generating reports, the getShiftsByFacility function needs to be updated. It should retrieve the custom Agent IDs associated with the Shifts worked by each Agent and include this information in the returned data.

Acceptance Criteria:

Modify the getShiftsByFacility function to join the Facilities and Agents tables to retrieve the custom_agent_id column for each Shift.
Include the custom_agent_id in the metadata about the Agent assigned to each Shift in the returned data.

Time/Effort Estimate:
This task is estimated to take approximately 4 hours.

Implementation Details:

Review the existing implementation of the getShiftsByFacility function to understand its structure and how the data is retrieved.
Modify the function to include a join operation between the Facilities and Agents tables using the Facility's ID and the Agent's ID.
Update the function to include the custom_agent_id column from the Facilities table in the returned data.
Test the updated function using sample data to ensure the custom_agent_id is correctly retrieved and included in the result.

Ticket 3: Update generateReport function to use custom Agent ID

Description:
To generate reports with the custom Agent IDs, the generateReport function needs to be updated to utilize the custom_agent_id instead of the internal database ID when creating the reports in PDF format.

Acceptance Criteria:

Modify the generateReport function to replace the internal database ID with the custom_agent_id in the generated reports.
The custom_agent_id should be displayed as the Agent ID in the reports.
Time/Effort Estimate:
This task is estimated to take approximately 3 hours.

Implementation Details:

Review the existing implementation of the generateReport function to understand how the Shifts and Agent IDs are processed to generate PDF reports.
Update the function to retrieve the custom_agent_id for each Agent and use it instead of the internal database ID when generating the reports.
Ensure that the custom_agent_id is properly formatted and displayed as the Agent ID in the generated PDF reports.
Test the updated function with a variety of Shifts and Agents to verify that the custom_agent_id is correctly used in the reports.
