export default function useCopyButton() {

  function handleClick(password) {
    navigator.clipboard.writeText(password);
  }
  return {handleClick };
}
