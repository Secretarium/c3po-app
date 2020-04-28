/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as RN from 'react-native';

declare module 'react-native' {
    interface TextProps {
        className?: string;
    }
    interface ButtonProps {
        className?: string;
    }
    interface ViewProps {
        className?: string;
    }
    interface ImageProps {
        className?: string;
    }
}

