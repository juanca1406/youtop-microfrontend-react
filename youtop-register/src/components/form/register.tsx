import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import '../../style/form.css'
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { urlPeliculas } from '../../endpoints';

export default function Registrar() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (envio: any) => {
        console.log(envio);
    };

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");
    const [students, setUsers] = useState([]);


    useEffect(() => {
        (async () => await Load())();
    }, []);

    async function Load() {
        const result = await axios.get("https://localhost:7119/api/Register/GetRegister");
        setUsers(result.data);
        console.log(result.data);
    }

    async function save(event) {

        event.preventDefault();
        try {
            await axios.post("https://localhost:7119/api/Register/AddRegister", {

                nombre: nombre,
                edad: edad,
                correo: correo,
                contra: contra,

            });
            alert("Student Registation Successfully");
            setId("");
            setNombre("");
            setEdad("");
            setCorreo("");
            setContra("");

            Load();
        } catch (err) {
            alert(err);
        }
    }

    async function editStudent(students) {
        setNombre(students.nombre);
        setEdad(students.edad);
        setCorreo(students.correo);
        setContra(students.contra);

        setId(students.id);
    }

    async function DeleteStudent(id) {
        await axios.delete("https://localhost:7195/api/Register/DeleteRegister/" + id);
        alert("Employee deleted Successfully");
        setId("");
        setNombre("");
        setEdad("");
        setCorreo("");
        setContra("");
        Load();
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.patch("https://localhost:7195/api/Register/UpdateRegister/" + students.find((u) => u.id === id).id || id,
                {
                    id: id,
                    nombre: nombre,
                    edad: edad,
                    correo: correo,
                    contra: contra,
                }
            );
            alert("Registation Updateddddd");
            setId("");
            setNombre("");
            setEdad("");
            setCorreo("");
            setContra("");

            Load();
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <div className='ContenedorRegistrar' >
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1>Registrar</h1>
                    <br />
                    <div className='registerId'>
                        <TextField id="id"
                            value={id} onChange={(event) => {
                                setId(event.target.value);
                            }}
                            label="id" variant="outlined" />
                    </div>
                    <br /><br />
                    <TextField
                        {...register('nombre', {
                            required: true,
                            maxLength: 10
                        })}
                        id="nombre"
                        value={nombre}
                        onChange={(event) => { setNombre(event.target.value); }}
                        label="Nombre Completo"
                        variant="outlined"

                    />

                    {errors.nombre?.type === 'required' &&
                        <Alert severity="error">El campo es requerido.</Alert>
                    }
                    <br /><br />

                    <TextField
                        {...register('edad', {
                            required: true
                        })}
                        id="edad"
                        value={edad}
                        onChange={(event) => { setEdad(event.target.value); }}
                        label="Edad"
                        variant="outlined"
                        type='number'
                    />

                    {errors.edad?.type === 'required' && (
                        <Alert severity="error">El campo es requerido.</Alert>
                    )}

                    <br /><br />

                    <TextField
                        {...register('correo', {
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                            required: true
                        })}
                        id="correo"
                        value={correo}
                        onChange={(event) => { setCorreo(event.target.value); }}
                        label="Correo electronico"
                        type='text'
                        variant="outlined"
                    />

                    {errors.correo?.type === 'pattern' && (
                        <Alert severity="error">El campo es requerido.</Alert>
                    )}
                    {errors.correo?.type === 'required' && (
                        <Alert severity="error">El campo es requerido.</Alert>
                    )}

                    <br /><br />
                    <TextField
                        {...register('contraseña')}
                        id="contra"
                        value={contra}
                        onChange={(event) => { setContra(event.target.value); }}
                        label="Contraseña"
                        type='text'
                        variant="outlined"
                    />
                    <br /><br />
                    <Button onClick={save} type='submit' variant="outlined" endIcon={<SendIcon />}>
                        Registrar
                    </Button>
                </Box>

            </div >
            <br /><br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Edad</TableCell>
                            <TableCell align="right">Correo</TableCell>
                            <TableCell align="right">Contraseña</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(function fn(student) {
                            return (
                                <TableRow key={student.id}>
                                    <TableCell component="th" scope="row">{student.id}</TableCell>
                                    <TableCell align="right">{student.nombre}</TableCell>
                                    <TableCell align="right">{student.edad}</TableCell>
                                    <TableCell align="right">{student.correo}</TableCell>
                                    <TableCell align="right">{student.contra}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}