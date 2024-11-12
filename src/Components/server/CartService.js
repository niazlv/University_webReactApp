import { getUser } from './Server';

const BASE_URL = 'http://localhost:8080';

export async function addToCart(plan) {
  try {
    const response = await fetch(`${BASE_URL}/add_to_cart.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `plan_id=${encodeURIComponent(plan.plan_id)}&quantity=1`,
      credentials: 'include',
    });

    const data = await response.json();

    return { message: data.message };
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error);
    return { message: 'Ошибка при добавлении в корзину' };
  }
}

export async function getCartItems() {
  try {
    const response = await fetch(`${BASE_URL}/get_cart.php`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();

    if (data.cart) {
      return data.cart;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Ошибка при получении корзины:', error);
    return [];
  }
}

export async function removeFromCart(plan) {
  try {
    const response = await fetch(`${BASE_URL}/remove_from_cart.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `plan_id=${encodeURIComponent(plan.plan_id)}`,
      credentials: 'include',
    });

    const data = await response.json();

    return { message: data.message };
  } catch (error) {
    console.error('Ошибка при удалении из корзины:', error);
    return { message: 'Ошибка при удалении из корзины' };
  }
}

export async function isInCart(plan) {
  try {
    const response = await fetch(`${BASE_URL}/is_in_cart.php?plan_id=${encodeURIComponent(plan.plan_id)}`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();

    return data.isInCart || false;
  } catch (error) {
    console.error('Ошибка при проверке корзины:', error);
    return false;
  }
}