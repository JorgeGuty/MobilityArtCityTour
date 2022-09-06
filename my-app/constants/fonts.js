import { Text } from 'react-native'
import { Colors } from './colors'

export const H1 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Medium',
          fontSize: 96,
          letterSpacing: -1.5,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const H2 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Medium',
          fontSize: 60,
          letterSpacing: -0.5,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const H3 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Bold',
          fontSize: 48,
          letterSpacing: 0,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const H4 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Bold',
          fontSize: 34,
          letterSpacing: 0.25,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const H5 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Bold',
          fontSize: 20,
          letterSpacing: 0,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const H6 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Bold',
          fontSize: 18,
          letterSpacing: 0,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const H7 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Bold',
          fontSize: 16,
          letterSpacing: 0.15,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const Subtitle1 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 16,
          letterSpacing: 0.15,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const Subtitle2 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Medium',
          fontSize: 14,
          letterSpacing: 0.1,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const Body1 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Regular',
          fontSize: 16,
          letterSpacing: 0.5,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const Body2 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Regular',
          fontSize: 14,
          letterSpacing: 0.25,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const Button1 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Bold',
          fontSize: 14,
          letterSpacing: 0.75,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const Caption1 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Medium',
          fontSize: 12,
          letterSpacing: 0.4,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const Caption2 = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Light',
          fontSize: 12,
          letterSpacing: 0.4,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}

export const Overline = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Light',
          fontSize: 10,
          letterSpacing: 1.5,
          color: Colors.business
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}
export const Icon = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        {
          fontFamily: 'material-icon',
          fontSize: 24,
          color: Colors.icon
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )
}
