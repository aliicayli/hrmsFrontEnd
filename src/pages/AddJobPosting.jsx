import React, { useEffect, useState } from 'react'
import { Dropdown, Form, Segment, TextArea, Button, Input } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'
import CityService from '../services/cityService'
import JobPositionService from '../services/jobPositionService'
import WorkTypeService from '../services/workTypeService'
import WorkTimeService from '../services/workTimeService'
import *as Yup from "yup"
import { useFormik } from 'formik'





export default function AddJobPosting({ errors, touched }) {

    let jobPostingService = new JobPostingService();


    const [jobPositions, setJobPositions] = useState([])
    const [cities, setCities] = useState([])
    const [workTypes, setWorkTypes] = useState([])
    const [workTimes, setWorkTimes] = useState([])





    useEffect(() => {
        let jobPositionService = new JobPositionService()
        let cityService = new CityService()
        let workTypeService = new WorkTypeService()
        let workTimeService = new WorkTimeService

        jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data))
        cityService.getCities().then((result) => setCities(result.data.data))
        workTypeService.getWorkTypes().then((result) => setWorkTypes(result.data.data))
        workTimeService.getWorkTimes().then((result) => setWorkTimes(result.data.data))
    }, [])

    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.jobPosition,
        value: jobPosition.id,
    }));

    const cityServiceOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id,

    }
    ));


    const workTypeOption = workTypes.map((workType, index) => ({
        key: index,
        text: workType.typeName,
        value: workType.id,
    }));

    const workTimeOption = workTimes.map((workTime, index) => ({
        key: index,
        text: workTime.workTimeName,
        value: workTime.id,
    }));

    const AddJobPostingSchema = Yup.object().shape({
        jobPosition: Yup.number().required("Lütfen bir iş pozisyonu girin"),
        cityId: Yup.number().required("Lütfen bir şehir seçiniz"),
        workTimeId: Yup.number().required("Lütfen çalışma zamanını seçiniz"),
        workTypeId: Yup.number().required("Lütfen Çalışma şeklini seçiniz"),
        minSalary: Yup.number().min(0, "Minimum maaş sıfırdan küçük olamaz"),
        maxSalary: Yup.number().min(0,"Maksimum maaş sıfırdan küçük olamaz"),
        applicationDeadline: Yup.date(),
    })




    const formik = new useFormik({
        initialValues: {
            employersId: { id: "" },
            jobPosition: "",
            jobDescription: "",
            cityId: { id: "" },
            workTypeId: "",
            workTimeId: "",
            minSalary: "",
            maxSalary: "",
            numberOfOpenPositions: "",
            releaseDate: "",
            applicationDeadline: "",
            isActive: "true"
        },

        validationSchema: AddJobPostingSchema,

        onSubmit: (values) => {
            let jobPosting = {
                isActive: values.isActive,
                employers: { id: "1" },
                jobPosition: { id: values.jobPosition },
                jobDescription: values.jobDescription,
                cityId: { id: values.cityId },
                workTypeId: { id: values.workTypeId },
                workTimeId: { id: values.workTimeId },
                minSalary: values.minSalary,
                maxSalary: values.maxSalary,
                numberOfOpenPositions: values.numberOfOpenPositions,
                releaseDate: values.releaseDate,
                applicationDeadline: values.applicationDeadline,
            }
            console.log(jobPosting)

            jobPostingService.add(jobPosting).then(result => console.log(result.data.message))

        }


    })

    return (
        <div>
            <Segment style={{ marginTop: "20px" }}>
                <Form onSubmit={formik.handleSubmit} >
                    <Form.Group widths="equal" style={{ marginTop: "20px" }}>
                        <Form.Field>
                            <Dropdown onChange={(event, data) =>
                                formik.setFieldValue("jobPosition", data.value)
                            }
                                placeholder='Pozisyon Adı'
                                fluid
                                selection
                                options={jobPositionOption}
                                value={formik.jobPosition}
                                id="jobPosition"
                            />
                            {formik.errors.jobPosition && formik.touched.jobPosition ? <div>{formik.errors.jobPosition}</div> : null}

                        </Form.Field>

                        <Form.Field>
                            <Dropdown onChange={(event, data) =>
                                formik.setFieldValue("cityId", data.value)
                            }
                                placeholder='Şehirler'
                                fluid
                                selection
                                options={cityServiceOption}
                                value={formik.cityId}
                                id="cityId"
                            />

                            {formik.errors.cityId && formik.touched.cityId ? <div>{formik.errors.cityId}</div> : null}
                        </Form.Field>
                    </Form.Group>

                    <Form.Group widths="equal" style={{ marginTop: "20px" }}>
                        <Form.Field>
                            <Dropdown onChange={(event, data) =>
                                formik.setFieldValue("workTimeId", data.value)
                            }
                                placeholder='Çalışma Zamanı'
                                fluid
                                selection
                                options={workTypeOption}
                                value={formik.workTimeId}
                                id="workTimeId"
                            />

                            {formik.errors.workTimeId && formik.touched.workTimeId ? <div>{formik.errors.workTimeId}</div> : null}
                        </Form.Field>

                        <Form.Field>
                            <Dropdown onChange={(event, data) =>
                                formik.setFieldValue("workTypeId", data.value)
                            }
                                placeholder='Çalışma Şekli'
                                fluid
                                selection
                                options={workTimeOption}
                                value={formik.workTypeId}
                                id="workTypeId"
                            />

                            {formik.errors.workTypeId && formik.touched.workTypeId ? <div>{formik.errors.workTypeId}</div> : null}
                        </Form.Field>
                    </Form.Group>

                    <Form.Group widths='equal' style={{ marginTop: "20px" }} >
                        <Form.Field>
                            <Input fluid label='Min maaş' placeholder='Min Maaş' value={formik.minSalary} id="minSalary" onChange={formik.handleChange} />
                              {formik.errors.minSalary && formik.touched.minSalary ? <div>{formik.errors.minSalary}</div> : null}
                        </Form.Field>
                      
                        <Form.Field>
                            <Input fluid label='Max maaş' placeholder='Max maaş' value={formik.maxSalary} id="maxSalary" onChange={formik.handleChange} />
                            {formik.errors.maxSalary && formik.touched.maxSalary ? <div>{formik.errors.maxSalary}</div> : null}
                        </Form.Field>
                        <Form.Field >
                            <Input fluid label='Tarih' placeholder='Tarih' value={formik.applicationDeadline} id="applicationDeadline" onChange={formik.handleChange} />
                            {formik.errors.applicationDeadline && formik.touched.applicationDeadline ? <div>{formik.errors.applicationDeadline}</div> : null}
                        </Form.Field>


                    </Form.Group>
                    <TextArea placeholder='İş Açıklaması' style={{ minHeight: 100 }} value={formik.jobDescription} id="jobDescription" onChange={formik.handleChange} />
                    {formik.errors.jobDescription && formik.touched.jobDescription ? <div>{formik.errors.jobDescription}</div> : null}
                    <Button type="submit" >
                        İlanı Paylaş
                        
                    </Button>

                </Form>

            </Segment>



        </div>
    )
}
