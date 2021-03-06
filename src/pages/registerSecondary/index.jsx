import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdAddAPhoto } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { getMyProfile } from "../../kenzieHub/user/myProfile";
import {
  StyledAccordionSummary,
  StyledAccordionDetails,
  StyledAccordion,
  ContainerForm,
  ContainerPersonIcon,
  ContainerDefault,
  ContainerButton,
  ContainerPersonPhoto,
  ContainerIcon,
  FabComponent,
  SelectLevel,
  Form,
} from "./style";
import {
  MenuItem,
  InputLabel,
  TextField,
  Checkbox,
  Typography,
} from "@material-ui/core";

import DefaultButton from "../../components/shared/buttons/defaultButton";
import ImageComponent from "../../components/shared/imageComponent";
import { updateUserProfilePicture } from "../../kenzieHub/user/updateProfileInfo";
import { MaleavatarImage } from "../../helpers/getImages";
import { updateUserInfo } from "../../kenzieHub/user/updateUser";

import { useState, useEffect } from "react";

const RegisterSeconddary = () => {
  const dispatch = useDispatch();
  const [image, setimage] = useState();
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [checkChangePass, setCheckChangePass] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState();
  const [selectStatus, setSelectStatus] = useState(" ");
  const [contactValue, setContactValue] = useState(" ");
  const [bioValue, setBioValue] = useState(" ");

  const history = useHistory();
  const schema = yup.object().shape({
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    password: yup.string().min(6, "Mínimo de 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais!"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const { searchedMember } = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(getMyProfile());

    setToken(localStorage.getItem("authToken"));

    setTimeout(() => {
      if (!token) {
        history.push("/");
      }
    }, 2000);
  }, [token]);

  const handleForm = async (data) => {
    console.log(data);
    await updateUserInfo(data);
    if (image) {
      const newData = new FormData();
      newData.append("avatar", image);
      //console.log(newData);
      await updateUserProfilePicture(newData);
    }
    history.push("/my-profile");
  };

  const handleImage = (evt) => {
    setimage(evt.target.files[0]);
  };

  const handleCheckChangePass = (value) => {
    setCheckChangePass(value);
  };

  useEffect(() => {
    setSelectStatus(searchedMember.course_module || "");
    setContactValue(searchedMember.contact || "");
    setBioValue(searchedMember.bio || "");
    setAvatarUrl(searchedMember.avatar_url || "");
  }, [searchedMember]);
  return token ? (
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
                  height="16rem"
                  smallHeight="9rem"
                  round
                />
              ) : avatarUrl ? (
                <ImageComponent
                  src={avatarUrl}
                  width="16rem"
                  smallWidth="9rem"
                  height="16rem"
                  smallHeight="9rem"
                  round
                />
              ) : (
                <MaleavatarImage
                  width="16rem"
                  smallWidth="9rem"
                  height="16rem"
                  smallHeight="9rem"
                  round
                />
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

          <ContainerDefault>
            <TextField
              fullWidth
              margin="normal"
              label="Contato"
              name="contact"
              value={contactValue}
              onChange={(evt) => {
                setContactValue(evt.target.value);
              }}
              inputRef={register}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
          </ContainerDefault>

          <TextField
            style={{ display: "none" }}
            name="course_module"
            inputRef={register}
            error={!!errors.contact}
            helperText={errors.contact?.message}
            value={selectStatus}
          />

          <ContainerDefault>
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
          </ContainerDefault>

          <ContainerDefault>
            <TextField
              fullWidth
              rows={6}
              multiline
              label="Bio"
              placeholder="Bio"
              name="bio"
              value={bioValue}
              onChange={(evt) => {
                setBioValue(evt.target.value);
              }}
              inputRef={register}
              error={!!errors.bio}
              helperText={errors.bio?.message}
            />
          </ContainerDefault>

          <StyledAccordion
            expanded={checkChangePass}
            onChange={(evt, expanded) => {
              handleCheckChangePass(expanded);
            }}
          >
            <StyledAccordionSummary>
              <Typography id="checkPass">Change password</Typography>
              <div>
                <Checkbox
                  checked={checkChangePass}
                  value={checkChangePass}
                  onChange={(evt) => {
                    handleCheckChangePass(evt.target.value);
                  }}
                  color="primary"
                  inputProps={{ "aria-label": "Alterar senha" }}
                />
              </div>
            </StyledAccordionSummary>
            {checkChangePass && (
              <StyledAccordionDetails>
                <TextField
                  type="password"
                  margin="normal"
                  label="Senha anterior"
                  name="old_password"
                  inputRef={register}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <TextField
                  type="password"
                  margin="normal"
                  label="Senha"
                  name="password"
                  inputRef={register}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <TextField
                  type="password"
                  margin="normal"
                  label="Confirmar Senha"
                  name="confirmPassword"
                  inputRef={register}
                  error={!!errors.password}
                  helperText={errors.confirmPassword?.message}
                />
              </StyledAccordionDetails>
            )}
          </StyledAccordion>

          <ContainerButton>
            <DefaultButton type="submit" value="Enviar" />
          </ContainerButton>
        </Form>
      </ContainerForm>
    </>
  ) : (
    <></>
  );
};
export default RegisterSeconddary;
