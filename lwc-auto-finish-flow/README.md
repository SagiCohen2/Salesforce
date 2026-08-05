# LWC - Auto Finish Flow

## autoFinishFlow

A Lightning Web Component that automatically finishes or navigates to the next step in a Salesforce Flow after a configurable delay - without requiring the user to click a button.

## What it does
- Displays a success message on screen
- After a configurable delay (default: 2 seconds), automatically fires a Flow navigation event
- If the current screen is the last step -> fires FINISH
- If there is a next step -> fires NEXT

## Properties
| Property | Type | Default | Description |
|---|---|---|---|
| message | String | איש קשר נוצר בהצלחה | The message displayed to the user |
| delaySeconds | Integer | 2 | Seconds to wait before auto-navigating |

## Usage
1. Add the component to a Flow Screen
2. Configure the message and delay in the component properties panel
3. No footer/Finish button needed - the component handles navigation automatically

## Deployment
``bash
sf project deploy start --source-dir force-app/main/default/lwc/autoFinishFlow --target-org <your-org-alias>
``