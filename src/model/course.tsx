export interface Course {
    id: string;
    userName: string;
    userAddress?: string;
    deviceType: string;
    manufacturerName: string;
    simCapacity: string;
    modelName: string;
    brandName: string;
    imei: [
        {
            id: string;
            registrationId: string;
            imei: string;
        }
    ];
}
