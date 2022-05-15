# Rush Hour ~ avoid traffic jams

<p align="center">
  <img src="https://github.com/Dragonhack-poggers/traffic-jam/blob/master/rush-hour.gif" />
</p>

Rush Hour is an app that aims to monitor and prevent traffic jams. It focuses mostly on so-called phantom traffic jams. 
Phantom traffic jams are called phantom, because they appear seemingly out of nowhere.
They are mostly caused by drivers not driving at an appropriate safety distance. At close distance, one driver braking, causes other drivers behind him to brake as well.
This causes a ripple effect that amplifies the speed reduction. Traffic jams are identified by the app, when the user’s phone notices a large number of bluetooth devices in its vicinity.
Other app users, that are approaching a traffic jam, are prompted to preemptively reduce their speed, to help prevent an even bigger buildup of traffic.
Users are rewarded points for reporting traffic jams, slowing down when prompted, and driving at a safe following distance.

They can turn in these points to receive a Highway pass discount. All data about traffic jams is displayed on the app's dashboard

## Features

- bluetooth subscribe for nearby devices
- when threshold is reached(eg.20) -> trigger traffic jam event
- traffic jam event -> saves current location
- notifies other users going on the same road to slow down

## Tech stack

- Supabase Auth & Database
- Node
- ExpressJs
- ReactJs with PWA

## Link
www.rush-hour.netlify.app
www.rush-hour.tech
