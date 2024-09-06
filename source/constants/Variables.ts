import {Dimensions, NativeModules, PixelRatio, Platform} from 'react-native';
const {PlatformConstants} = NativeModules;

const SCREEN_WIDTH: number = Dimensions.get('window').width;
const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const pixelRatio = PixelRatio.get();
const deviceType = PlatformConstants.interfaceIdiom;
const isTablet =
  SCREEN_WIDTH / pixelRatio >= 600 || SCREEN_HEIGHT / pixelRatio >= 600;

let isPhoneProxy;
if (Platform.OS === 'android') {
  isPhoneProxy = !isTablet;
} else {
  isPhoneProxy = deviceType === 'phone';
}
const isPhone = isPhoneProxy;

export {SCREEN_WIDTH, SCREEN_HEIGHT, isPhone};

export const expenseCategories = [
  {category: 'Groceries', color: '#4CAF50'}, // Green
  {category: 'Rent/Mortgage', color: '#2196F3'}, // Blue
  {category: 'Utilities', color: '#FF9800'}, // Orange
  {category: 'Transportation', color: '#F44336'}, // Red
  {category: 'Dining Out', color: '#FFEB3B'}, // Yellow
  {category: 'Entertainment', color: '#9C27B0'}, // Purple
  {category: 'Health/Medical', color: '#009688'}, // Teal
  {category: 'Clothing', color: '#E91E63'}, // Pink
  {category: 'Education', color: '#795548'}, // Brown
  {category: 'Savings', color: '#388E3C'}, // Dark Green
  {category: 'Debt Payments', color: '#B71C1C'}, // Dark Red
  {category: 'Insurance', color: '#03A9F4'}, // Light Blue
  {category: 'Subscriptions', color: '#673AB7'}, // Violet
  {category: 'Personal Care', color: '#F8BBD0'}, // Light Pink
  {category: 'Miscellaneous', color: '#9E9E9E'}, // Grey
];
