import {DeviceEventEmitter} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/Variables';

export const getPercentHeight = (percent: number) => {
  return (percent / 100) * SCREEN_HEIGHT;
};
export const getPercentWidth = (percent: number) => {
  return (percent / 100) * SCREEN_WIDTH;
};

export function formatNumberWithCommas(number: number) {
  // Split the number into whole and decimal parts
  const parts = number.toString().split('.');

  // Format the whole number part with commas
  const wholeNumberWithCommas = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // If there is a decimal part, append it back to the whole number with commas
  const result =
    parts.length > 1
      ? wholeNumberWithCommas + '.' + parts[1]
      : wholeNumberWithCommas;

  return result;
}

export const pad = (text: string) => {
  if (text.toString().length > 1) {
    return text;
  } else {
    return '0' + text;
  }
};

export const showNotification = ({
  msg,
  error,
}: {
  msg: string;
  error?: boolean;
}) => {
  DeviceEventEmitter.emit('openNotification', {
    error,
    msg,
  });
};
