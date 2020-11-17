import { IonDid, IonDocumentModel, IonKey, IonNetwork, IonRequest, IonSdkConfig } from '@decentralized-identity/ion-sdk';

// this prints out a create operation request with no key and services
async function generateIonValues (): Promise<void> {
    /**
     * Add or remove whatever you want here to try and break the sdk or add properties to your did document
     */

    // Sets network to testnet.
    IonSdkConfig.network = IonNetwork.Testnet;

    // Generate recovery key and update key for the operation. This is required for the future when you need to update or recover your document
    // index 0 is the public key and index 1 is the private key
    const [recoveryKey] = await IonKey.generateEs256kOperationKeyPair();
    const [updateKey] = await IonKey.generateEs256kOperationKeyPair();

    /**
     * This generates an authentication key, and can be added to the document under publicKeys
     */
    // const keyId = 'someKeyId';
    // const purpose = IonPublicKeyPurpose.Authentication;
    // const [publicKey] = await IonKey.generateEs256kDidDocumentKeyPair({id: keyId, purposes: [purpose]});
    // const publicKeys = [publicKey];

    /**
     * This is a service you can add to your document under services
     */
    // const exampleService = {
    //     id: 'someId',
    //     type: 'website',
    //     serviceEndpoint: 'https://www.ionIsCool.com'
    // }
    // const services = [exampleService];

    const document : IonDocumentModel = {
        // publicKeys,
        // services
    }
    const input = { recoveryKey, updateKey, document };

    // This creates a long-form DID.
    const did = IonDid.createLongFormDid(input);
    console.log('==============BELOW IS A LONG-FORM DID==============');
    console.log(JSON.stringify(did));
    console.log('====================================================');

    //This creates the create request and prints it out. You can copy and paste this into postman to make the request
    const request = IonRequest.createCreateRequest(input);
    console.log('==============BELOW IS A CREATE REQUEST=============');
    console.log(JSON.stringify(request, null, 2));
    console.log('====================================================');
}

generateIonValues();