function MyButton() {
    function handleClick() {
      alert('Votre Message est perdu dans hadès');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }