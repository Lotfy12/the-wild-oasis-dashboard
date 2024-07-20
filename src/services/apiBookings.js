import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookings() {
  let { data, error } = await supabase
    .from("bookings")
    .select("* ,cabins(name), guests(fullName, email)");
  if (error) {
    console.log("there is an error in fetching bookings");
  }
  return data;
}
export async function allBookings() {
  let { data, error } = await supabase.from("bookings").select("*");
  if (error) {
    console.log("there is an error in fetching bookings");
  }
  return data;
}

export async function getBooking(id) {
  let { data, error } = await supabase
    .from("bookings")
    .select(
      "* ,cabins(name),guests( email, fullName, nationalId, countryFlag, nationality)"
    )
    .eq("id", id);

  if (error) {
    console.log("can not catching the booking");
  }
  return data[0];
}

export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")

    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}
