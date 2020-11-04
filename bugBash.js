const sdk = require('@decentralized-identity/ion-sdk')

// this prints out a create operation request with no key and services
async function generateIonValues () {
    /**
     * Add or remove whatever you want here to try and break the sdk or add properties to your did document
     */


    /**
     * Generate recovery key and update key for the operation. This is required for the future when you need to update or recover your document
     * index 0 is the public key and index 1 is the private key
     */
    const recoveryKeys = await sdk.IonKey.generateEs256kOperationKeyPair();
    const updateKeys = await sdk.IonKey.generateEs256kOperationKeyPair();


    /**
     * This generates an authentication key, and can be added to the document under publicKeys
     */
    // const keyId = 'someKeyId';
    // const purpose = sdk.IonPublicKeyPurpose.Authentication;
    // const authenticationKey = await sdk.IonKey.generateEs256kDidDocumentKeyPair(keyId, purpose);
    // const publicKeys = [authenticationKey]

    /**
     * This is a servicce you can add to your document under services
     */
    // const exampleService = {
    //     id: 'someId',
    //     type: 'website',
    //     serviceEndpoint: 'https://www.ionIsCool.com'
    // }
    // services = [exampleService]


    /**
     * This creates the create request and prints it out. You can copy and paste this into postman to make the request
     */
    const document = {}
    const request = sdk.IonRequest.createCreateRequest({recoveryKey: recoveryKeys[0], updateKey: updateKeys[0], document: document});
    console.log('==============THIS IS YOUR REQUEST==============');
    console.log(JSON.stringify(request, null, 2));
    console.log('================================================');
}

generateIonValues();