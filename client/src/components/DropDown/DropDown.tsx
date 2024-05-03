import { useDropDownStore } from "../../store/dropDown/dropDown";
import { useModalStore } from "../../store/showModal/showModal";
import { Children } from "./Children";
import { Container } from "./Container";
import { Field } from "./Field";

interface DropDownProps {
  isActive: boolean;
}

export default function DropDown({ isActive }: DropDownProps) {
  const { activeField, setActiveField } = useDropDownStore();
  const { setEditModal } = useModalStore();

  return (
    <Container dropDownActive={isActive}>
      <div>
        <Field text="Editar grupo" onClick={() => setEditModal(true)} />
        <Field
          text="Sair do grupo"
          onClick={() => setActiveField(!activeField)}
          isActive={activeField}
        >
          <Children text="Certeza que deseja sair?" />
        </Field>
      </div>
    </Container>
  );
}
