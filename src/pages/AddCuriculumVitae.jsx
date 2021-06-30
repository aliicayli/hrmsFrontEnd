import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import { Formik, Form } from 'formik'
import { Button } from 'semantic-ui-react'
import FormTextInput from '../utilities/customFormControls/FormTextInput'
import CurriculumVitaeService from '../services/curiculumVitaeService';

export default function AddCuriculumVitae() {

    let curriculumVitaeService = new CurriculumVitaeService();



    const initialValues = {firstName:"", lastName:"", birthDay:"", epostaAddress:"", schoolName:"", departmentName:"", technologyName:"",languageName:"", languageLevel:""}

    const schema = Yup.object({
        // firstName: Yup.string().required("İsim zorunlu"),
        // lastName: Yup.string().required("Soyad zorunlu"),
        // birthDay: Yup.string().required("Doğum tarihi zorunlu"),
        // epostaAddress: Yup.string().required("e-posta adresi zorunlu"),
        schoolName: Yup.string().required("Okul adı zorunlu"),
        departmentName: Yup.string().required("Bölüm adı zorunlu"),
        technologyName: Yup.string().required("Teknoloji adı zorunlu"),
        languageName: Yup.string().required("Dil adı zorunlu"),
        languageLevel: Yup.string().required("Dil seviyesi zorunlu")
    })


    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit = {(values)=>{
           let curriculumVitae = {
            jobSeekerId: {
                id: 1,  
              },
               
              schoolName: {
                schoolName: values.schoolName,
              },

              department: {
                departmentName: values.departmentName
              },

               technologyName: values.technologyName,
               languageName: values.languageName,
               languageLevel: values.languageLevel
           }
           curriculumVitaeService.add(curriculumVitae).then(result=>console.log(result.data.data))
            console.log(values)
        }}
        >

            <Form className="ui form" style={{ marginTop: "2em" }}>
                {/* <FormTextInput name="firstName" placeholder="İsim" />
                <FormTextInput name="lastName" placeholder="Soyad" />
                <FormTextInput name="birthDay" placeholder="Doğum Günü" />
                <FormTextInput name="epostaAddress" placeholder="e-posta adresi" /> */}
                <FormTextInput name="schoolName" placeholder="Okul adı" />
                <FormTextInput name="departmentName" placeholder="Bölüm adı" />
                <FormTextInput name="technologyName" placeholder="Teknoloji adı" />
                <FormTextInput name="languageName" placeholder="Dil adı" />
                <FormTextInput name="languageLevel" placeholder="Dil seviyesi" />

                <Button color="green" type="submit" >Ekle</Button>

            </Form>
            
        </Formik>
    )
}
