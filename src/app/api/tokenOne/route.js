import { NextResponse } from 'next/server';

export async function GET(request) {
    // Array of 3 hardcoded objects
    const tokens = [
        {
            name: "ExampleToken1",
            symbol: "EXT1",
            decimals: 18,
            token_address: "0x1234567890abcdef1234567890abcdef12345678",
            deployed_by: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
            properties: {
                meta: {
                    description: "Description for ExampleToken1",
                    image: "QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
                    external_url: "https://example.com/token/1",
                    launchTime: "2024-09-23T16:22:29.191Z",
                    social_media: {
                        telegram: "https://t.me/example1",
                        twitter: "https://x.com/example1"
                    }
                }
            }
        },
        {
            name: "ExampleToken2",
            symbol: "EXT2",
            decimals: 18,
            token_address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
            deployed_by: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
            properties: {
                meta: {
                    description: "Description for ExampleToken2",
                    image: "QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
                    external_url: "https://example.com/token/2",
                    launchTime: "2024-10-01T12:00:00.000Z",
                    social_media: {
                        telegram: "https://t.me/example2",
                        twitter: "https://x.com/example2"
                    }
                }
            }
        },
        {
            name: "ExampleToken3",
            symbol: "EXT3",
            decimals: 18,
            token_address: "0xabcdef1234567890abcdef1234567890abcdef12",
            deployed_by: "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
            properties: {
                meta: {
                    description: "Description for ExampleToken3",
                    image: "QmYi4RecDM2Z4eTNXNaNeriWd4enupBZSnUkCujaFK6qWH",
                    external_url: "https://example.com/token/3",
                    launchTime: "2024-11-15T09:30:45.000Z",
                    social_media: {
                        telegram: "https://t.me/example3",
                        twitter: "https://x.com/example3"
                    }
                }
            }
        }
    ];

    // Get the token_address from the query parameters
    const { searchParams } = new URL(request.url);
    const tokenAddress = searchParams.get('tokenAddress');

    // If a token_address is provided, filter the tokens array
    if (tokenAddress) {
        const token = tokens.find(t => t.token_address === tokenAddress);
        if (token) {
            return NextResponse.json(token);
        } else {
            return NextResponse.json({ error: 'Token not found' }, { status: 404 });
        }
    }

    // Send response with all tokens if no token_address is provided
    return NextResponse.json(tokens);
}
