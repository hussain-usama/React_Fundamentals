// import axios from "axios";
// import { useEffect } from "react";

// export default function useDebounce({ url, searchValue }) {

//   useEffect(() => {
//     let timeout = setTimeout(async () => {
//         const response = await axios.get(`${url}${searchValue}`);
//         console.log(response, "searchapi");
//       if (response.status === 200) return response.data;
//       else return false;
//     }, 500);

//     return () => {
//       clearTimeout(timeout);
//     };

//   }, [url,searchValue]);
// }
// seDebounce(() => alert(count), 1000, [count])

// export default function useDebounce(callback, delay, dependencies) {
//     const { reset, clear } = useTimeout(callback, delay)
//     useEffect(reset, [...dependencies, reset])
//     useEffect(clear, [])
//   }

//   export default function useTimeout(callback, delay) {
//     const callbackRef = useRef(callback)
//     const timeoutRef = useRef()
  
//     useEffect(() => {
//       callbackRef.current = callback
//     }, [callback])
  
//     const set = useCallback(() => {
//       timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
//     }, [delay])
  
//     const clear = useCallback(() => {
//       timeoutRef.current && clearTimeout(timeoutRef.current)
//     }, [])
  
//     useEffect(() => {
//       set()
//       return clear
//     }, [delay, set, clear])
  
//     const reset = useCallback(() => {
//       clear()
//       set()
//     }, [clear, set])
  
//     return { reset, clear }
//   }