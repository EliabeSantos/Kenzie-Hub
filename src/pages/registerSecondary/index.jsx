import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdAddAPhoto } from "react-icons/md";
import { Fab } from "@material-ui/core";
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
} from "./style";
import { Select, MenuItem, InputLabel, TextField } from "@material-ui/core";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import { MaleavatarImage } from "../../helpers/getImages";

const RegisterSeconddary = () => {
  const history = useHistory();
  const schema = yup.object({
    techs: yup
      .object({
        title: yup.string().required(),
        status: yup.string().required(),
      })
      .required("Campo obrigatório"),
    bio: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <ContainerForm>
        <form onSubmit={handleSubmit(handleForm)}>
          <ContainerPersonIcon>
            <ContainerPersonPhoto>
              <i>
                <MaleavatarImage width="16rem" />
              </i>
            </ContainerPersonPhoto>

            <ContainerIcon>
              <label htmlFor="upload-photo">
                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="avatar_url"
                  inputRef={register}
                  error={!!errors.avatar_url}
                  helperText={errors.avatar_url?.message}
                  type="file"
                />
                <Fab
                  color="primary"
                  size="small"
                  component="span"
                  aria-label="add"
                >
                  <MdAddAPhoto />
                </Fab>
              </label>
            </ContainerIcon>
          </ContainerPersonIcon>

          <ContainerTechs>
            <ContainerTitle>
              <TextField
                fullWidth
                margin="normal"
                label="Tecnologia"
                name="title"
                inputRef={register}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </ContainerTitle>
            <ContainerStatus>
              <InputLabel id="demo-simple-select-label">Nivel</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                inputRef={register}
                error={!!errors.status}
                helperText={errors.status?.message}
              >
                <MenuItem value="Basic">Iniciante</MenuItem>
                <MenuItem value="Medium">Intermédiário</MenuItem>
                <MenuItem value="Advanced">Avançado</MenuItem>
              </Select>
            </ContainerStatus>
          </ContainerTechs>

          <ContainerBio>
            <TextField
              fullWidth
              rows={8}
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
            <DefaultButton
              type="submit"
              value="Ver meu Perfil"
              _OnClick={() => history.push("")}
            >
              Registrar
            </DefaultButton>
          </ContainerButton>
        </form>
      </ContainerForm>
    </>
  );
};
export default RegisterSeconddary;
