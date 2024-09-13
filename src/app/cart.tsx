import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform } from 'react-native';
import { FlatList } from 'react-native';
import { useCart } from '@/src/providers/CartProvider';
import CartListItem from '@/src/components/CartListItem';
import Button from '@/src/components/Button';

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />

      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500' }}>
        Total: ${total.toFixed(2)}
      </Text>
      <Button text='Checkout' />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;