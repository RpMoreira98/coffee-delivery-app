import { useEffect, useState } from "react";
import "./forms.css";
import { useForm } from "../../../../contexts/forms";

export const Forms = () => {
  const [data, setData] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const formCtx = useForm();

  useEffect(() => {
    formCtx?.setAddText((prev) => ({
      ...prev,
      ...data,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <form action="" className="form-validator">
      <div className="input-1">
        <input
          type="text"
          placeholder="CEP"
          value={data.cep}
          onChange={(event) =>
            setData((prev) => ({ ...prev, cep: event.target.value }))
          }
        />
      </div>
      <div className="input-2">
        <input
          type="text"
          placeholder="Rua"
          value={data.rua}
          onChange={(event) =>
            setData((prev) => ({ ...prev, rua: event.target.value }))
          }
          required
        />
      </div>
      <div className="input-3">
        <input
          type="text"
          placeholder="Número"
          value={data.numero}
          onChange={(event) =>
            setData((prev) => ({ ...prev, numero: event.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Complemento"
          value={data.complemento}
          onChange={(event) =>
            setData((prev) => ({ ...prev, complemento: event.target.value }))
          }
        />
      </div>
      <div className="input-4">
        <input
          type="text"
          placeholder="Bairro"
          value={data.bairro}
          onChange={(event) =>
            setData((prev) => ({ ...prev, bairro: event.target.value }))
          }
          required
        />
        <input
          type="text"
          placeholder="Cidade"
          className="input-lx"
          value={data.cidade}
          onChange={(event) =>
            setData((prev) => ({ ...prev, cidade: event.target.value }))
          }
        />
        <input
          type="text"
          placeholder="UF"
          value={data.uf}
          onChange={(event) =>
            setData((prev) => ({ ...prev, uf: event.target.value }))
          }
        />
      </div>
    </form>
  );
};
