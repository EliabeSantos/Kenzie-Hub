import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdAddAPhoto } from "react-icons/md";
import {
  ContainerForm,
  ContainerPersonIcon,
  ContainerTechs,
  ContainerTitle,
  ContainerStatus,
  ContainerBio,
  ContainerButton,
  ContainerPersonPhoto,
  ContainerIcon,
  FabComponent,
  SelectLevel,
  Form,
} from "./style";
import { MenuItem, InputLabel, TextField } from "@material-ui/core";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import ImageComponent from "../../components/shared/imageComponent";
import { updateUserProfilePicture } from "../../kenzieHub/user/updateProfileInfo";
import { MaleavatarImage } from "../../helpers/getImages";
import { updateUserInfo } from "../../kenzieHub/user/updateUser";

import { useState } from "react";
import { useEffect } from "react";

const RegisterSeconddary = () => {
  const [image, setimage] = useState();
  const [selectStatus, setSelectStatus] = useState(" ");
  const history = useHistory();
  const schema = yup.object().shape({
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    bio: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    // const newData = new FormData();
    // newData.append("avatar", image);
    // updateUserProfilePicture(newData);

    updateUserInfo(data);

    history.push("/my-profile");
  };

  const handleImage = (evt) => {
    setimage(evt.target.files[0]);
  };

  return (
    <>
      <ContainerForm>
        <Form onSubmit={handleSubmit(handleForm)}>
          <ContainerPersonIcon>
            <ContainerPersonPhoto>
              {image ? (
                <ImageComponent
                  src={URL.createObjectURL(image)}
                  width="16rem"
                  smallWidth="9rem"
                />
              ) : (
                <MaleavatarImage width="16rem" smallWidth="9rem" />
              )}
            </ContainerPersonPhoto>
            <ContainerIcon>
              <label htmlFor="avatar">
                <input
                  style={{ display: "none" }}
                  id="avatar"
                  name="avatar_url"
                  ref={register}
                  error={!!errors.avatar_url}
                  helperText={errors.avatar_url?.message}
                  type="file"
                  onChange={handleImage}
                />
                <FabComponent
                  color="primary"
                  size="small"
                  component="span"
                  aria-label="add"
                >
                  <MdAddAPhoto fontSize="2rem" />
                </FabComponent>
              </label>
            </ContainerIcon>
          </ContainerPersonIcon>

          <ContainerTechs>
            <ContainerTitle>
              <TextField
                fullWidth
                margin="normal"
                label="Contato"
                name="contact"
                inputRef={register}
                error={!!errors.contact}
                helperText={errors.contact?.message}
              />
            </ContainerTitle>
            <TextField
              style={{ display: "none" }}
              name="course_module"
              inputRef={register}
              error={!!errors.contact}
              helperText={errors.contact?.message}
              value={selectStatus}
            />
            <ContainerStatus>
              <InputLabel id="select-label">Módulo</InputLabel>
              <SelectLevel
                labelId="select-label"
                id="select"
                inputRef={register}
                error={!!errors.course_module}
                helperText={errors.course_module?.message}
                value={selectStatus}
                onChange={(evt) => setSelectStatus(evt.target.value)}
              >
                <MenuItem value={"Módulo 1 - Front-end Iniciante"}>
                  Módulo 1 - Front-end Iniciante
                </MenuItem>
                <MenuItem value={"Módulo 2 - Front-end Avançado"}>
                  Módulo 2 - Front-end Avançado
                </MenuItem>
                <MenuItem value={"Módulo 3 - Back-end Iniciante"}>
                  Módulo 3 - Back-end Iniciante
                </MenuItem>
                <MenuItem value={"Módulo 4 - Back-end Avançado"}>
                  Módulo 4 - Back-end Avançado
                </MenuItem>
              </SelectLevel>
            </ContainerStatus>
          </ContainerTechs>

          <ContainerBio>
            <TextField
              fullWidth
              rows={6}
              multiline
              placeholder="Bio"
              aria-label=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="bio"
              inputRef={register}
              error={!!errors.bio}
              helperText={errors.bio?.message}
            />
          </ContainerBio>
          <ContainerButton>
            <DefaultButton type="submit" value="Registrar" />
          </ContainerButton>
        </Form>
      </ContainerForm>
    </>
  );
};
export default RegisterSeconddary;
