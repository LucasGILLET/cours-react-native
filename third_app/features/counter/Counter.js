import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from './counterSlice'
import { View, Text, Button, TextInput } from 'react-native';

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(0)

  return (
    <View>
        <Button
          title='Increment'
          aria-label="Increment value"
          onPress={() => dispatch(increment())}
        >
        </Button>
        <Text>{count}</Text>
        <Button
          title='Decrement'
          aria-label="Decrement value"
          onPress={() => dispatch(decrement())}
        >
        </Button>
        <TextInput inputMode='numeric' editable placeholder="0" value={String(value)} onChangeText={setValue}></TextInput>
        <Button
          title='Ajouter X'
          onPress={() => dispatch(incrementByAmount(Number(value)))}
        >
        </Button>
        <Button
          title='Réduire de X'
          onPress={() => dispatch(decrementByAmount(Number(value)))}
        >
        </Button>

    </View>
  )
}