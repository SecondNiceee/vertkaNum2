

export const retryFetch = async <T>(fn : () => Promise<T>, retryCount:number= 3, delay:number= 400) => {

    let lastError:Error|null = null;

    for (let i=0;i<retryCount;i++){
        try{
            const response = await fn();
            return response;
        }
        catch(error){
            lastError = error instanceof Error ? error : new Error(String(error))
            if (i < retryCount-1){
                await new Promise((resolve) => setTimeout(resolve, delay))
            }
        }
    }
    if (lastError){
        throw lastError
    }
    throw new Error("Неизвестная ошибка")

}