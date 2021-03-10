export const UserValidation = (values) => {
    const errors = {};

    if (!values.name || values.name === ""){
        errors.name = "Tidak boleh kosong";
    }
    if (!values.tanggallahir || values.tanggallahir === ""){
        errors.tanggallahir = "Tidak boleh kosong";
    }
    if (!values.jabatan || values.jabatan === ""){
        errors.jabatan = "Tidak boleh kosong";
    }
    if (!values.nip || values.nip === ""){
        errors.nip = "Tidak boleh kosong";
    }
    // if (!values.nip || values.nip === ""){
    //     errors.nip = "Tidak boleh kosong";
    // }
    if (!values.jeniskelamin || values.jeniskelamin === ""){
        errors.jeniskelamin = "Tidak boleh kosong";
    }

    return errors;
}
