// duration to time stamp where ex. 9.25 hrs is 9.15
export const durationToTimestamp = (duration: number): string => {
    const raw_hours = duration / 3600;
    const hours = Math.floor(raw_hours);
    const minutes = Math.round((raw_hours - hours) * 60);
    if (minutes === 0) {
      return `${hours}:00`
    }
    return `${hours}:${minutes}`;
  };