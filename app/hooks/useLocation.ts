import * as ExpoLocation from "expo-location";
import { useEffect, useState } from "react";

import { Location } from "../screens/ListingEditScreen";

interface LocationOutput {
  location: Location | undefined;
  error: Object | undefined;
}

export default function useLocation(): LocationOutput {
  const [location, setLocation] = useState<Location>();
  const [error, setError] = useState({});

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { granted } =
        await ExpoLocation.requestForegroundPermissionsAsync();
      if (!granted) return;

      const result = await ExpoLocation.getLastKnownPositionAsync();
      if (result) {
        const {
          coords: { latitude, longitude },
        } = result;
        setLocation({ latitude, longitude });
      }
    } catch (err: any) {
      setError(err);
    }
  };

  return { location, error };
}
