"use server"

export async function contactForm(formData : FormData) {
    const contactDetails = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        phoneNumber : formData.get("phoneNumber")
    }
    
    console.log(contactDetails)

    return "Success"
}