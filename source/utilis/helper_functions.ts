import {DeviceEventEmitter} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/Variables';

export const getPercentHeight = (percent: number) => {
  return (percent / 100) * SCREEN_HEIGHT;
};
export const getPercentWidth = (percent: number) => {
  return (percent / 100) * SCREEN_WIDTH;
};

export function formatNumberWithCommas(number: number) {
  const parts = number.toString().split('.');
  const wholeNumberWithCommas = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const result =
    parts.length > 1
      ? wholeNumberWithCommas + '.' + parts[1]
      : wholeNumberWithCommas + '.00';

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
