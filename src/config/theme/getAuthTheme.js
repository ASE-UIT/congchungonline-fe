import { getDesignTokens } from './themePrimitives';

export default function getAuthTheme(mode) {
  return {
    ...getDesignTokens(mode),
  };
}
