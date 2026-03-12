export const submitToFormSubmit = async (data: Record<string, any>) => {
    try {
        const response = await fetch("https://formsubmit.co/ajax/evolxinteriordesign@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error("Form submission error:", error);
        throw error;
    }
};
