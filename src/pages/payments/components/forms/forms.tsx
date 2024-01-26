import "./forms.css";
export const Forms = () => {
  return (
    <form action="" className="form-validator">
      <div className="input-1">
        <input type="text" placeholder="CEP" />
      </div>
      <div className="input-2">
        <input type="text" placeholder="Rua" />
      </div>
      <div className="input-3">
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Complemento" />
      </div>
      <div className="input-4">
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" className="input-lx" />
        <input type="text" placeholder="UF" />
      </div>
    </form>
  );
};
