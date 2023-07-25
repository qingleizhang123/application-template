import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace UIBot. */
export namespace UIBot {

    /** Namespace Common. */
    namespace Common {

        /** Properties of a MessageUpdateSelectedPatientInfo. */
        interface IMessageUpdateSelectedPatientInfo {

            /** MessageUpdateSelectedPatientInfo IsRefresh */
            IsRefresh?: (boolean|null);

            /** MessageUpdateSelectedPatientInfo PatientUID */
            PatientUID?: (string|null);

            /** MessageUpdateSelectedPatientInfo MsgDBTagInfoList */
            MsgDBTagInfoList?: (UIBot.Common.IMessageDBTagInfo[]|null);
        }

        /** Represents a MessageUpdateSelectedPatientInfo. */
        class MessageUpdateSelectedPatientInfo implements IMessageUpdateSelectedPatientInfo {

            /**
             * Constructs a new MessageUpdateSelectedPatientInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMessageUpdateSelectedPatientInfo);

            /** MessageUpdateSelectedPatientInfo IsRefresh. */
            public IsRefresh: boolean;

            /** MessageUpdateSelectedPatientInfo PatientUID. */
            public PatientUID: string;

            /** MessageUpdateSelectedPatientInfo MsgDBTagInfoList. */
            public MsgDBTagInfoList: UIBot.Common.IMessageDBTagInfo[];

            /**
             * Creates a new MessageUpdateSelectedPatientInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageUpdateSelectedPatientInfo instance
             */
            public static create(properties?: UIBot.Common.IMessageUpdateSelectedPatientInfo): UIBot.Common.MessageUpdateSelectedPatientInfo;

            /**
             * Encodes the specified MessageUpdateSelectedPatientInfo message. Does not implicitly {@link UIBot.Common.MessageUpdateSelectedPatientInfo.verify|verify} messages.
             * @param message MessageUpdateSelectedPatientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMessageUpdateSelectedPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageUpdateSelectedPatientInfo message, length delimited. Does not implicitly {@link UIBot.Common.MessageUpdateSelectedPatientInfo.verify|verify} messages.
             * @param message MessageUpdateSelectedPatientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMessageUpdateSelectedPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageUpdateSelectedPatientInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageUpdateSelectedPatientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MessageUpdateSelectedPatientInfo;

            /**
             * Decodes a MessageUpdateSelectedPatientInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageUpdateSelectedPatientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MessageUpdateSelectedPatientInfo;

            /**
             * Verifies a MessageUpdateSelectedPatientInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageUpdateSelectedPatientInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageUpdateSelectedPatientInfo
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MessageUpdateSelectedPatientInfo;

            /**
             * Creates a plain object from a MessageUpdateSelectedPatientInfo message. Also converts values to other types if specified.
             * @param message MessageUpdateSelectedPatientInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MessageUpdateSelectedPatientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageUpdateSelectedPatientInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageUpdateSelectedPatientInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MessageDBTagInfo. */
        interface IMessageDBTagInfo {

            /** MessageDBTagInfo Tag */
            Tag?: (number|null);

            /** MessageDBTagInfo Value */
            Value?: (string|null);
        }

        /** Represents a MessageDBTagInfo. */
        class MessageDBTagInfo implements IMessageDBTagInfo {

            /**
             * Constructs a new MessageDBTagInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMessageDBTagInfo);

            /** MessageDBTagInfo Tag. */
            public Tag: number;

            /** MessageDBTagInfo Value. */
            public Value: string;

            /**
             * Creates a new MessageDBTagInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageDBTagInfo instance
             */
            public static create(properties?: UIBot.Common.IMessageDBTagInfo): UIBot.Common.MessageDBTagInfo;

            /**
             * Encodes the specified MessageDBTagInfo message. Does not implicitly {@link UIBot.Common.MessageDBTagInfo.verify|verify} messages.
             * @param message MessageDBTagInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMessageDBTagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageDBTagInfo message, length delimited. Does not implicitly {@link UIBot.Common.MessageDBTagInfo.verify|verify} messages.
             * @param message MessageDBTagInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMessageDBTagInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageDBTagInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageDBTagInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MessageDBTagInfo;

            /**
             * Decodes a MessageDBTagInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageDBTagInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MessageDBTagInfo;

            /**
             * Verifies a MessageDBTagInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageDBTagInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageDBTagInfo
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MessageDBTagInfo;

            /**
             * Creates a plain object from a MessageDBTagInfo message. Also converts values to other types if specified.
             * @param message MessageDBTagInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MessageDBTagInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageDBTagInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageDBTagInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CurrentPatientInfo. */
        interface ICurrentPatientInfo {

            /** CurrentPatientInfo Name */
            Name?: (string|null);

            /** CurrentPatientInfo Number */
            Number?: (string|null);

            /** CurrentPatientInfo Sex */
            Sex?: (string|null);

            /** CurrentPatientInfo Age */
            Age?: (string|null);
        }

        /** Represents a CurrentPatientInfo. */
        class CurrentPatientInfo implements ICurrentPatientInfo {

            /**
             * Constructs a new CurrentPatientInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.ICurrentPatientInfo);

            /** CurrentPatientInfo Name. */
            public Name: string;

            /** CurrentPatientInfo Number. */
            public Number: string;

            /** CurrentPatientInfo Sex. */
            public Sex: string;

            /** CurrentPatientInfo Age. */
            public Age: string;

            /**
             * Creates a new CurrentPatientInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CurrentPatientInfo instance
             */
            public static create(properties?: UIBot.Common.ICurrentPatientInfo): UIBot.Common.CurrentPatientInfo;

            /**
             * Encodes the specified CurrentPatientInfo message. Does not implicitly {@link UIBot.Common.CurrentPatientInfo.verify|verify} messages.
             * @param message CurrentPatientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.ICurrentPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CurrentPatientInfo message, length delimited. Does not implicitly {@link UIBot.Common.CurrentPatientInfo.verify|verify} messages.
             * @param message CurrentPatientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.ICurrentPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CurrentPatientInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CurrentPatientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.CurrentPatientInfo;

            /**
             * Decodes a CurrentPatientInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CurrentPatientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.CurrentPatientInfo;

            /**
             * Verifies a CurrentPatientInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CurrentPatientInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CurrentPatientInfo
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.CurrentPatientInfo;

            /**
             * Creates a plain object from a CurrentPatientInfo message. Also converts values to other types if specified.
             * @param message CurrentPatientInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.CurrentPatientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CurrentPatientInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CurrentPatientInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgAccountUser. */
        interface IMsgAccountUser {

            /** MsgAccountUser stuid */
            stuid: string;

            /** MsgAccountUser username */
            username: string;

            /** MsgAccountUser name */
            name: string;

            /** MsgAccountUser roleKey */
            roleKey: string;
        }

        /** Represents a MsgAccountUser. */
        class MsgAccountUser implements IMsgAccountUser {

            /**
             * Constructs a new MsgAccountUser.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgAccountUser);

            /** MsgAccountUser stuid. */
            public stuid: string;

            /** MsgAccountUser username. */
            public username: string;

            /** MsgAccountUser name. */
            public name: string;

            /** MsgAccountUser roleKey. */
            public roleKey: string;

            /**
             * Creates a new MsgAccountUser instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgAccountUser instance
             */
            public static create(properties?: UIBot.Common.IMsgAccountUser): UIBot.Common.MsgAccountUser;

            /**
             * Encodes the specified MsgAccountUser message. Does not implicitly {@link UIBot.Common.MsgAccountUser.verify|verify} messages.
             * @param message MsgAccountUser message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgAccountUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgAccountUser message, length delimited. Does not implicitly {@link UIBot.Common.MsgAccountUser.verify|verify} messages.
             * @param message MsgAccountUser message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgAccountUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgAccountUser message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgAccountUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgAccountUser;

            /**
             * Decodes a MsgAccountUser message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgAccountUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgAccountUser;

            /**
             * Verifies a MsgAccountUser message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgAccountUser message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgAccountUser
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgAccountUser;

            /**
             * Creates a plain object from a MsgAccountUser message. Also converts values to other types if specified.
             * @param message MsgAccountUser
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgAccountUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgAccountUser to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgAccountUser
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgAccountUserList. */
        interface IMsgAccountUserList {

            /** MsgAccountUserList userList */
            userList?: (UIBot.Common.IMsgAccountUser[]|null);
        }

        /** Represents a MsgAccountUserList. */
        class MsgAccountUserList implements IMsgAccountUserList {

            /**
             * Constructs a new MsgAccountUserList.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgAccountUserList);

            /** MsgAccountUserList userList. */
            public userList: UIBot.Common.IMsgAccountUser[];

            /**
             * Creates a new MsgAccountUserList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgAccountUserList instance
             */
            public static create(properties?: UIBot.Common.IMsgAccountUserList): UIBot.Common.MsgAccountUserList;

            /**
             * Encodes the specified MsgAccountUserList message. Does not implicitly {@link UIBot.Common.MsgAccountUserList.verify|verify} messages.
             * @param message MsgAccountUserList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgAccountUserList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgAccountUserList message, length delimited. Does not implicitly {@link UIBot.Common.MsgAccountUserList.verify|verify} messages.
             * @param message MsgAccountUserList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgAccountUserList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgAccountUserList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgAccountUserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgAccountUserList;

            /**
             * Decodes a MsgAccountUserList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgAccountUserList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgAccountUserList;

            /**
             * Verifies a MsgAccountUserList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgAccountUserList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgAccountUserList
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgAccountUserList;

            /**
             * Creates a plain object from a MsgAccountUserList message. Also converts values to other types if specified.
             * @param message MsgAccountUserList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgAccountUserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgAccountUserList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgAccountUserList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgErrorInfo. */
        interface IMsgErrorInfo {

            /** MsgErrorInfo errorID */
            errorID: number;

            /** MsgErrorInfo errorInfo */
            errorInfo?: (string|null);
        }

        /** Represents a MsgErrorInfo. */
        class MsgErrorInfo implements IMsgErrorInfo {

            /**
             * Constructs a new MsgErrorInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgErrorInfo);

            /** MsgErrorInfo errorID. */
            public errorID: number;

            /** MsgErrorInfo errorInfo. */
            public errorInfo: string;

            /**
             * Creates a new MsgErrorInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgErrorInfo instance
             */
            public static create(properties?: UIBot.Common.IMsgErrorInfo): UIBot.Common.MsgErrorInfo;

            /**
             * Encodes the specified MsgErrorInfo message. Does not implicitly {@link UIBot.Common.MsgErrorInfo.verify|verify} messages.
             * @param message MsgErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgErrorInfo message, length delimited. Does not implicitly {@link UIBot.Common.MsgErrorInfo.verify|verify} messages.
             * @param message MsgErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgErrorInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgErrorInfo;

            /**
             * Decodes a MsgErrorInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgErrorInfo;

            /**
             * Verifies a MsgErrorInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgErrorInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgErrorInfo
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgErrorInfo;

            /**
             * Creates a plain object from a MsgErrorInfo message. Also converts values to other types if specified.
             * @param message MsgErrorInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgErrorInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgErrorInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MessageSegResult. */
        interface IMessageSegResult {

            /** MessageSegResult seriesuid */
            seriesuid?: (string|null);

            /** MessageSegResult length */
            length?: (number|null);

            /** MessageSegResult count */
            count?: (number|null);

            /** MessageSegResult data */
            data?: (Uint8Array|null);
        }

        /** Represents a MessageSegResult. */
        class MessageSegResult implements IMessageSegResult {

            /**
             * Constructs a new MessageSegResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMessageSegResult);

            /** MessageSegResult seriesuid. */
            public seriesuid: string;

            /** MessageSegResult length. */
            public length: number;

            /** MessageSegResult count. */
            public count: number;

            /** MessageSegResult data. */
            public data: Uint8Array;

            /**
             * Creates a new MessageSegResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageSegResult instance
             */
            public static create(properties?: UIBot.Common.IMessageSegResult): UIBot.Common.MessageSegResult;

            /**
             * Encodes the specified MessageSegResult message. Does not implicitly {@link UIBot.Common.MessageSegResult.verify|verify} messages.
             * @param message MessageSegResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMessageSegResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageSegResult message, length delimited. Does not implicitly {@link UIBot.Common.MessageSegResult.verify|verify} messages.
             * @param message MessageSegResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMessageSegResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageSegResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageSegResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MessageSegResult;

            /**
             * Decodes a MessageSegResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageSegResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MessageSegResult;

            /**
             * Verifies a MessageSegResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageSegResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageSegResult
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MessageSegResult;

            /**
             * Creates a plain object from a MessageSegResult message. Also converts values to other types if specified.
             * @param message MessageSegResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MessageSegResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageSegResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageSegResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgMeshData. */
        interface IMsgMeshData {

            /** MsgMeshData VertexPosition */
            VertexPosition?: (number[]|null);

            /** MsgMeshData VertexNormal */
            VertexNormal?: (number[]|null);

            /** MsgMeshData VertexNum */
            VertexNum: number;

            /** MsgMeshData HasValue */
            HasValue: boolean;

            /** MsgMeshData DataDirty */
            DataDirty: boolean;

            /** MsgMeshData VertexValue */
            VertexValue?: (number[]|null);

            /** MsgMeshData VertexColor */
            VertexColor?: (number[]|null);

            /** MsgMeshData VertexIndex */
            VertexIndex?: (number[]|null);

            /** MsgMeshData VertexIndexNum */
            VertexIndexNum: number;
        }

        /** Represents a MsgMeshData. */
        class MsgMeshData implements IMsgMeshData {

            /**
             * Constructs a new MsgMeshData.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgMeshData);

            /** MsgMeshData VertexPosition. */
            public VertexPosition: number[];

            /** MsgMeshData VertexNormal. */
            public VertexNormal: number[];

            /** MsgMeshData VertexNum. */
            public VertexNum: number;

            /** MsgMeshData HasValue. */
            public HasValue: boolean;

            /** MsgMeshData DataDirty. */
            public DataDirty: boolean;

            /** MsgMeshData VertexValue. */
            public VertexValue: number[];

            /** MsgMeshData VertexColor. */
            public VertexColor: number[];

            /** MsgMeshData VertexIndex. */
            public VertexIndex: number[];

            /** MsgMeshData VertexIndexNum. */
            public VertexIndexNum: number;

            /**
             * Creates a new MsgMeshData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgMeshData instance
             */
            public static create(properties?: UIBot.Common.IMsgMeshData): UIBot.Common.MsgMeshData;

            /**
             * Encodes the specified MsgMeshData message. Does not implicitly {@link UIBot.Common.MsgMeshData.verify|verify} messages.
             * @param message MsgMeshData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgMeshData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgMeshData message, length delimited. Does not implicitly {@link UIBot.Common.MsgMeshData.verify|verify} messages.
             * @param message MsgMeshData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgMeshData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgMeshData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgMeshData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgMeshData;

            /**
             * Decodes a MsgMeshData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgMeshData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgMeshData;

            /**
             * Verifies a MsgMeshData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgMeshData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgMeshData
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgMeshData;

            /**
             * Creates a plain object from a MsgMeshData message. Also converts values to other types if specified.
             * @param message MsgMeshData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgMeshData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgMeshData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgMeshData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgUserCheck. */
        interface IMsgUserCheck {

            /** MsgUserCheck userName */
            userName?: (string|null);

            /** MsgUserCheck password */
            password: string;
        }

        /** Represents a MsgUserCheck. */
        class MsgUserCheck implements IMsgUserCheck {

            /**
             * Constructs a new MsgUserCheck.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgUserCheck);

            /** MsgUserCheck userName. */
            public userName: string;

            /** MsgUserCheck password. */
            public password: string;

            /**
             * Creates a new MsgUserCheck instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgUserCheck instance
             */
            public static create(properties?: UIBot.Common.IMsgUserCheck): UIBot.Common.MsgUserCheck;

            /**
             * Encodes the specified MsgUserCheck message. Does not implicitly {@link UIBot.Common.MsgUserCheck.verify|verify} messages.
             * @param message MsgUserCheck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgUserCheck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgUserCheck message, length delimited. Does not implicitly {@link UIBot.Common.MsgUserCheck.verify|verify} messages.
             * @param message MsgUserCheck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgUserCheck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgUserCheck message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgUserCheck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgUserCheck;

            /**
             * Decodes a MsgUserCheck message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgUserCheck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgUserCheck;

            /**
             * Verifies a MsgUserCheck message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgUserCheck message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgUserCheck
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgUserCheck;

            /**
             * Creates a plain object from a MsgUserCheck message. Also converts values to other types if specified.
             * @param message MsgUserCheck
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgUserCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgUserCheck to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgUserCheck
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgAcpcParameterInfo. */
        interface IMsgAcpcParameterInfo {

            /** MsgAcpcParameterInfo AcpcDistance */
            AcpcDistance?: (number|null);

            /** MsgAcpcParameterInfo LateralLeftDistance */
            LateralLeftDistance?: (number|null);

            /** MsgAcpcParameterInfo LateralLeftRatio */
            LateralLeftRatio?: (number|null);

            /** MsgAcpcParameterInfo AnterioiDistance */
            AnterioiDistance?: (number|null);

            /** MsgAcpcParameterInfo AnterioiRatio */
            AnterioiRatio?: (number|null);

            /** MsgAcpcParameterInfo InferiorDistance */
            InferiorDistance?: (number|null);

            /** MsgAcpcParameterInfo InferiorRatio */
            InferiorRatio?: (number|null);

            /** MsgAcpcParameterInfo LateralLeftAngle */
            LateralLeftAngle?: (number|null);

            /** MsgAcpcParameterInfo PosteriorAngle */
            PosteriorAngle?: (number|null);

            /** MsgAcpcParameterInfo TrajectoryLength */
            TrajectoryLength?: (number|null);

            /** MsgAcpcParameterInfo AcpcPointShowHide */
            AcpcPointShowHide?: (boolean|null);

            /** MsgAcpcParameterInfo IsLocked */
            IsLocked?: (boolean|null);
        }

        /** Represents a MsgAcpcParameterInfo. */
        class MsgAcpcParameterInfo implements IMsgAcpcParameterInfo {

            /**
             * Constructs a new MsgAcpcParameterInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgAcpcParameterInfo);

            /** MsgAcpcParameterInfo AcpcDistance. */
            public AcpcDistance: number;

            /** MsgAcpcParameterInfo LateralLeftDistance. */
            public LateralLeftDistance: number;

            /** MsgAcpcParameterInfo LateralLeftRatio. */
            public LateralLeftRatio: number;

            /** MsgAcpcParameterInfo AnterioiDistance. */
            public AnterioiDistance: number;

            /** MsgAcpcParameterInfo AnterioiRatio. */
            public AnterioiRatio: number;

            /** MsgAcpcParameterInfo InferiorDistance. */
            public InferiorDistance: number;

            /** MsgAcpcParameterInfo InferiorRatio. */
            public InferiorRatio: number;

            /** MsgAcpcParameterInfo LateralLeftAngle. */
            public LateralLeftAngle: number;

            /** MsgAcpcParameterInfo PosteriorAngle. */
            public PosteriorAngle: number;

            /** MsgAcpcParameterInfo TrajectoryLength. */
            public TrajectoryLength: number;

            /** MsgAcpcParameterInfo AcpcPointShowHide. */
            public AcpcPointShowHide: boolean;

            /** MsgAcpcParameterInfo IsLocked. */
            public IsLocked: boolean;

            /**
             * Creates a new MsgAcpcParameterInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgAcpcParameterInfo instance
             */
            public static create(properties?: UIBot.Common.IMsgAcpcParameterInfo): UIBot.Common.MsgAcpcParameterInfo;

            /**
             * Encodes the specified MsgAcpcParameterInfo message. Does not implicitly {@link UIBot.Common.MsgAcpcParameterInfo.verify|verify} messages.
             * @param message MsgAcpcParameterInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgAcpcParameterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgAcpcParameterInfo message, length delimited. Does not implicitly {@link UIBot.Common.MsgAcpcParameterInfo.verify|verify} messages.
             * @param message MsgAcpcParameterInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgAcpcParameterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgAcpcParameterInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgAcpcParameterInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgAcpcParameterInfo;

            /**
             * Decodes a MsgAcpcParameterInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgAcpcParameterInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgAcpcParameterInfo;

            /**
             * Verifies a MsgAcpcParameterInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgAcpcParameterInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgAcpcParameterInfo
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgAcpcParameterInfo;

            /**
             * Creates a plain object from a MsgAcpcParameterInfo message. Also converts values to other types if specified.
             * @param message MsgAcpcParameterInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgAcpcParameterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgAcpcParameterInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgAcpcParameterInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgColor. */
        interface IMsgColor {

            /** MsgColor red */
            red: number;

            /** MsgColor green */
            green: number;

            /** MsgColor blue */
            blue: number;

            /** MsgColor alpha */
            alpha: number;
        }

        /** Represents a MsgColor. */
        class MsgColor implements IMsgColor {

            /**
             * Constructs a new MsgColor.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgColor);

            /** MsgColor red. */
            public red: number;

            /** MsgColor green. */
            public green: number;

            /** MsgColor blue. */
            public blue: number;

            /** MsgColor alpha. */
            public alpha: number;

            /**
             * Creates a new MsgColor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgColor instance
             */
            public static create(properties?: UIBot.Common.IMsgColor): UIBot.Common.MsgColor;

            /**
             * Encodes the specified MsgColor message. Does not implicitly {@link UIBot.Common.MsgColor.verify|verify} messages.
             * @param message MsgColor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgColor message, length delimited. Does not implicitly {@link UIBot.Common.MsgColor.verify|verify} messages.
             * @param message MsgColor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgColor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgColor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgColor;

            /**
             * Decodes a MsgColor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgColor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgColor;

            /**
             * Verifies a MsgColor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgColor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgColor
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgColor;

            /**
             * Creates a plain object from a MsgColor message. Also converts values to other types if specified.
             * @param message MsgColor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgColor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgColor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgColor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Msg3DPoint. */
        interface IMsg3DPoint {

            /** Msg3DPoint x */
            x: number;

            /** Msg3DPoint y */
            y: number;

            /** Msg3DPoint z */
            z: number;
        }

        /** Represents a Msg3DPoint. */
        class Msg3DPoint implements IMsg3DPoint {

            /**
             * Constructs a new Msg3DPoint.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsg3DPoint);

            /** Msg3DPoint x. */
            public x: number;

            /** Msg3DPoint y. */
            public y: number;

            /** Msg3DPoint z. */
            public z: number;

            /**
             * Creates a new Msg3DPoint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Msg3DPoint instance
             */
            public static create(properties?: UIBot.Common.IMsg3DPoint): UIBot.Common.Msg3DPoint;

            /**
             * Encodes the specified Msg3DPoint message. Does not implicitly {@link UIBot.Common.Msg3DPoint.verify|verify} messages.
             * @param message Msg3DPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsg3DPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Msg3DPoint message, length delimited. Does not implicitly {@link UIBot.Common.Msg3DPoint.verify|verify} messages.
             * @param message Msg3DPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsg3DPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Msg3DPoint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Msg3DPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.Msg3DPoint;

            /**
             * Decodes a Msg3DPoint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Msg3DPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.Msg3DPoint;

            /**
             * Verifies a Msg3DPoint message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Msg3DPoint message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Msg3DPoint
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.Msg3DPoint;

            /**
             * Creates a plain object from a Msg3DPoint message. Also converts values to other types if specified.
             * @param message Msg3DPoint
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.Msg3DPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Msg3DPoint to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Msg3DPoint
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgLineStrip. */
        interface IMsgLineStrip {

            /** MsgLineStrip LineStrip */
            LineStrip?: (UIBot.Common.IMsg3DPoint[]|null);
        }

        /** Represents a MsgLineStrip. */
        class MsgLineStrip implements IMsgLineStrip {

            /**
             * Constructs a new MsgLineStrip.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgLineStrip);

            /** MsgLineStrip LineStrip. */
            public LineStrip: UIBot.Common.IMsg3DPoint[];

            /**
             * Creates a new MsgLineStrip instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgLineStrip instance
             */
            public static create(properties?: UIBot.Common.IMsgLineStrip): UIBot.Common.MsgLineStrip;

            /**
             * Encodes the specified MsgLineStrip message. Does not implicitly {@link UIBot.Common.MsgLineStrip.verify|verify} messages.
             * @param message MsgLineStrip message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgLineStrip, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgLineStrip message, length delimited. Does not implicitly {@link UIBot.Common.MsgLineStrip.verify|verify} messages.
             * @param message MsgLineStrip message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgLineStrip, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgLineStrip message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgLineStrip
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgLineStrip;

            /**
             * Decodes a MsgLineStrip message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgLineStrip
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgLineStrip;

            /**
             * Verifies a MsgLineStrip message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgLineStrip message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgLineStrip
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgLineStrip;

            /**
             * Creates a plain object from a MsgLineStrip message. Also converts values to other types if specified.
             * @param message MsgLineStrip
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgLineStrip, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgLineStrip to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgLineStrip
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgFiberItem. */
        interface IMsgFiberItem {

            /** MsgFiberItem index */
            index: number;

            /** MsgFiberItem name */
            name?: (string|null);

            /** MsgFiberItem refVolUid */
            refVolUid?: (string|null);

            /** MsgFiberItem isVisible */
            isVisible?: (boolean|null);

            /** MsgFiberItem isSelected */
            isSelected?: (boolean|null);

            /** MsgFiberItem isUseFacolor */
            isUseFacolor?: (boolean|null);

            /** MsgFiberItem pureColor */
            pureColor?: (UIBot.Common.IMsgColor|null);

            /** MsgFiberItem fiberValue */
            fiberValue?: (UIBot.Common.IMsgLineStrip[]|null);

            /** MsgFiberItem fiberPara */
            fiberPara?: (UIBot.Common.IMsgFiberPara|null);
        }

        /** Represents a MsgFiberItem. */
        class MsgFiberItem implements IMsgFiberItem {

            /**
             * Constructs a new MsgFiberItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgFiberItem);

            /** MsgFiberItem index. */
            public index: number;

            /** MsgFiberItem name. */
            public name: string;

            /** MsgFiberItem refVolUid. */
            public refVolUid: string;

            /** MsgFiberItem isVisible. */
            public isVisible: boolean;

            /** MsgFiberItem isSelected. */
            public isSelected: boolean;

            /** MsgFiberItem isUseFacolor. */
            public isUseFacolor: boolean;

            /** MsgFiberItem pureColor. */
            public pureColor?: (UIBot.Common.IMsgColor|null);

            /** MsgFiberItem fiberValue. */
            public fiberValue: UIBot.Common.IMsgLineStrip[];

            /** MsgFiberItem fiberPara. */
            public fiberPara?: (UIBot.Common.IMsgFiberPara|null);

            /**
             * Creates a new MsgFiberItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgFiberItem instance
             */
            public static create(properties?: UIBot.Common.IMsgFiberItem): UIBot.Common.MsgFiberItem;

            /**
             * Encodes the specified MsgFiberItem message. Does not implicitly {@link UIBot.Common.MsgFiberItem.verify|verify} messages.
             * @param message MsgFiberItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgFiberItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgFiberItem message, length delimited. Does not implicitly {@link UIBot.Common.MsgFiberItem.verify|verify} messages.
             * @param message MsgFiberItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgFiberItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgFiberItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgFiberItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgFiberItem;

            /**
             * Decodes a MsgFiberItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgFiberItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgFiberItem;

            /**
             * Verifies a MsgFiberItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgFiberItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgFiberItem
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgFiberItem;

            /**
             * Creates a plain object from a MsgFiberItem message. Also converts values to other types if specified.
             * @param message MsgFiberItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgFiberItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgFiberItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgFiberItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgFiberPara. */
        interface IMsgFiberPara {

            /** MsgFiberPara renderLengthLimit */
            renderLengthLimit?: (number|null);

            /** MsgFiberPara tubeRadius */
            tubeRadius?: (number|null);

            /** MsgFiberPara renderStrategy */
            renderStrategy?: (number|null);

            /** MsgFiberPara colorStrategy */
            colorStrategy?: (number|null);

            /** MsgFiberPara lutName */
            lutName?: (string|null);

            /** MsgFiberPara pureColor */
            pureColor?: (UIBot.Common.IMsgColor|null);

            /** MsgFiberPara colorList */
            colorList?: (UIBot.Common.IMsgColor[]|null);
        }

        /** Represents a MsgFiberPara. */
        class MsgFiberPara implements IMsgFiberPara {

            /**
             * Constructs a new MsgFiberPara.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgFiberPara);

            /** MsgFiberPara renderLengthLimit. */
            public renderLengthLimit: number;

            /** MsgFiberPara tubeRadius. */
            public tubeRadius: number;

            /** MsgFiberPara renderStrategy. */
            public renderStrategy: number;

            /** MsgFiberPara colorStrategy. */
            public colorStrategy: number;

            /** MsgFiberPara lutName. */
            public lutName: string;

            /** MsgFiberPara pureColor. */
            public pureColor?: (UIBot.Common.IMsgColor|null);

            /** MsgFiberPara colorList. */
            public colorList: UIBot.Common.IMsgColor[];

            /**
             * Creates a new MsgFiberPara instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgFiberPara instance
             */
            public static create(properties?: UIBot.Common.IMsgFiberPara): UIBot.Common.MsgFiberPara;

            /**
             * Encodes the specified MsgFiberPara message. Does not implicitly {@link UIBot.Common.MsgFiberPara.verify|verify} messages.
             * @param message MsgFiberPara message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgFiberPara, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgFiberPara message, length delimited. Does not implicitly {@link UIBot.Common.MsgFiberPara.verify|verify} messages.
             * @param message MsgFiberPara message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgFiberPara, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgFiberPara message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgFiberPara
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgFiberPara;

            /**
             * Decodes a MsgFiberPara message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgFiberPara
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgFiberPara;

            /**
             * Verifies a MsgFiberPara message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgFiberPara message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgFiberPara
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgFiberPara;

            /**
             * Creates a plain object from a MsgFiberPara message. Also converts values to other types if specified.
             * @param message MsgFiberPara
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgFiberPara, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgFiberPara to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgFiberPara
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgFiberList. */
        interface IMsgFiberList {

            /** MsgFiberList fibers */
            fibers?: (UIBot.Common.IMsgFiberItem[]|null);
        }

        /** Represents a MsgFiberList. */
        class MsgFiberList implements IMsgFiberList {

            /**
             * Constructs a new MsgFiberList.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgFiberList);

            /** MsgFiberList fibers. */
            public fibers: UIBot.Common.IMsgFiberItem[];

            /**
             * Creates a new MsgFiberList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgFiberList instance
             */
            public static create(properties?: UIBot.Common.IMsgFiberList): UIBot.Common.MsgFiberList;

            /**
             * Encodes the specified MsgFiberList message. Does not implicitly {@link UIBot.Common.MsgFiberList.verify|verify} messages.
             * @param message MsgFiberList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgFiberList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgFiberList message, length delimited. Does not implicitly {@link UIBot.Common.MsgFiberList.verify|verify} messages.
             * @param message MsgFiberList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgFiberList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgFiberList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgFiberList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgFiberList;

            /**
             * Decodes a MsgFiberList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgFiberList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgFiberList;

            /**
             * Verifies a MsgFiberList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgFiberList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgFiberList
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgFiberList;

            /**
             * Creates a plain object from a MsgFiberList message. Also converts values to other types if specified.
             * @param message MsgFiberList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgFiberList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgFiberList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgFiberList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgFiberOper. */
        interface IMsgFiberOper {

            /** MsgFiberOper changeType */
            changeType: string;

            /** MsgFiberOper changeValue */
            changeValue?: (Uint8Array|null);

            /** MsgFiberOper changeIndex */
            changeIndex?: (number|null);
        }

        /** Represents a MsgFiberOper. */
        class MsgFiberOper implements IMsgFiberOper {

            /**
             * Constructs a new MsgFiberOper.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgFiberOper);

            /** MsgFiberOper changeType. */
            public changeType: string;

            /** MsgFiberOper changeValue. */
            public changeValue: Uint8Array;

            /** MsgFiberOper changeIndex. */
            public changeIndex: number;

            /**
             * Creates a new MsgFiberOper instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgFiberOper instance
             */
            public static create(properties?: UIBot.Common.IMsgFiberOper): UIBot.Common.MsgFiberOper;

            /**
             * Encodes the specified MsgFiberOper message. Does not implicitly {@link UIBot.Common.MsgFiberOper.verify|verify} messages.
             * @param message MsgFiberOper message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgFiberOper, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgFiberOper message, length delimited. Does not implicitly {@link UIBot.Common.MsgFiberOper.verify|verify} messages.
             * @param message MsgFiberOper message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgFiberOper, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgFiberOper message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgFiberOper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgFiberOper;

            /**
             * Decodes a MsgFiberOper message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgFiberOper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgFiberOper;

            /**
             * Verifies a MsgFiberOper message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgFiberOper message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgFiberOper
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgFiberOper;

            /**
             * Creates a plain object from a MsgFiberOper message. Also converts values to other types if specified.
             * @param message MsgFiberOper
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgFiberOper, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgFiberOper to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgFiberOper
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StatisticResult. */
        interface IStatisticResult {

            /** StatisticResult elemCount */
            elemCount?: (number|null);

            /** StatisticResult volume */
            volume?: (number|null);

            /** StatisticResult mean */
            mean?: (number|null);

            /** StatisticResult staticMax */
            staticMax?: (number|null);

            /** StatisticResult staticMin */
            staticMin?: (number|null);

            /** StatisticResult staticStd */
            staticStd?: (number|null);

            /** StatisticResult maxX */
            maxX?: (number|null);

            /** StatisticResult maxY */
            maxY?: (number|null);

            /** StatisticResult maxZ */
            maxZ?: (number|null);

            /** StatisticResult sliceLocation */
            sliceLocation?: (number|null);

            /** StatisticResult peak */
            peak?: (number|null);

            /** StatisticResult rulerUnit */
            rulerUnit?: (string|null);

            /** StatisticResult valueUnit */
            valueUnit?: (string|null);
        }

        /** Represents a StatisticResult. */
        class StatisticResult implements IStatisticResult {

            /**
             * Constructs a new StatisticResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IStatisticResult);

            /** StatisticResult elemCount. */
            public elemCount: number;

            /** StatisticResult volume. */
            public volume: number;

            /** StatisticResult mean. */
            public mean: number;

            /** StatisticResult staticMax. */
            public staticMax: number;

            /** StatisticResult staticMin. */
            public staticMin: number;

            /** StatisticResult staticStd. */
            public staticStd: number;

            /** StatisticResult maxX. */
            public maxX: number;

            /** StatisticResult maxY. */
            public maxY: number;

            /** StatisticResult maxZ. */
            public maxZ: number;

            /** StatisticResult sliceLocation. */
            public sliceLocation: number;

            /** StatisticResult peak. */
            public peak: number;

            /** StatisticResult rulerUnit. */
            public rulerUnit: string;

            /** StatisticResult valueUnit. */
            public valueUnit: string;

            /**
             * Creates a new StatisticResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatisticResult instance
             */
            public static create(properties?: UIBot.Common.IStatisticResult): UIBot.Common.StatisticResult;

            /**
             * Encodes the specified StatisticResult message. Does not implicitly {@link UIBot.Common.StatisticResult.verify|verify} messages.
             * @param message StatisticResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IStatisticResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatisticResult message, length delimited. Does not implicitly {@link UIBot.Common.StatisticResult.verify|verify} messages.
             * @param message StatisticResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IStatisticResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatisticResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatisticResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.StatisticResult;

            /**
             * Decodes a StatisticResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatisticResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.StatisticResult;

            /**
             * Verifies a StatisticResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatisticResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatisticResult
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.StatisticResult;

            /**
             * Creates a plain object from a StatisticResult message. Also converts values to other types if specified.
             * @param message StatisticResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.StatisticResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatisticResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StatisticResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgTissueInfo. */
        interface IMsgTissueInfo {

            /** MsgTissueInfo index */
            index: number;

            /** MsgTissueInfo name */
            name?: (string|null);

            /** MsgTissueInfo opacity */
            opacity?: (number|null);

            /** MsgTissueInfo color */
            color?: (UIBot.Common.IMsgColor|null);

            /** MsgTissueInfo vrtPath */
            vrtPath?: (string|null);

            /** MsgTissueInfo visibility */
            visibility?: (boolean|null);

            /** MsgTissueInfo isLocked */
            isLocked?: (boolean|null);

            /** MsgTissueInfo deleteEnabled */
            deleteEnabled?: (boolean|null);

            /** MsgTissueInfo isSelected */
            isSelected?: (boolean|null);

            /** MsgTissueInfo isDisplayStatistic */
            isDisplayStatistic?: (boolean|null);

            /** MsgTissueInfo isUseVrt */
            isUseVrt?: (boolean|null);

            /** MsgTissueInfo tissueType */
            tissueType?: (number|null);

            /** MsgTissueInfo tissueBasis */
            tissueBasis?: (string|null);

            /** MsgTissueInfo appInfo */
            appInfo?: (Uint8Array|null);

            /** MsgTissueInfo tissueComments */
            tissueComments?: (string|null);

            /** MsgTissueInfo tissueRefUidVisible */
            tissueRefUidVisible?: (boolean|null);

            /** MsgTissueInfo labels */
            labels?: (number[]|null);

            /** MsgTissueInfo tissueStatic */
            tissueStatic?: (UIBot.Common.IStatisticResult|null);

            /** MsgTissueInfo stateOnMpr */
            stateOnMpr?: (Uint8Array|null);

            /** MsgTissueInfo stateOnVr */
            stateOnVr?: (Uint8Array|null);
        }

        /** Represents a MsgTissueInfo. */
        class MsgTissueInfo implements IMsgTissueInfo {

            /**
             * Constructs a new MsgTissueInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgTissueInfo);

            /** MsgTissueInfo index. */
            public index: number;

            /** MsgTissueInfo name. */
            public name: string;

            /** MsgTissueInfo opacity. */
            public opacity: number;

            /** MsgTissueInfo color. */
            public color?: (UIBot.Common.IMsgColor|null);

            /** MsgTissueInfo vrtPath. */
            public vrtPath: string;

            /** MsgTissueInfo visibility. */
            public visibility: boolean;

            /** MsgTissueInfo isLocked. */
            public isLocked: boolean;

            /** MsgTissueInfo deleteEnabled. */
            public deleteEnabled: boolean;

            /** MsgTissueInfo isSelected. */
            public isSelected: boolean;

            /** MsgTissueInfo isDisplayStatistic. */
            public isDisplayStatistic: boolean;

            /** MsgTissueInfo isUseVrt. */
            public isUseVrt: boolean;

            /** MsgTissueInfo tissueType. */
            public tissueType: number;

            /** MsgTissueInfo tissueBasis. */
            public tissueBasis: string;

            /** MsgTissueInfo appInfo. */
            public appInfo: Uint8Array;

            /** MsgTissueInfo tissueComments. */
            public tissueComments: string;

            /** MsgTissueInfo tissueRefUidVisible. */
            public tissueRefUidVisible: boolean;

            /** MsgTissueInfo labels. */
            public labels: number[];

            /** MsgTissueInfo tissueStatic. */
            public tissueStatic?: (UIBot.Common.IStatisticResult|null);

            /** MsgTissueInfo stateOnMpr. */
            public stateOnMpr: Uint8Array;

            /** MsgTissueInfo stateOnVr. */
            public stateOnVr: Uint8Array;

            /**
             * Creates a new MsgTissueInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgTissueInfo instance
             */
            public static create(properties?: UIBot.Common.IMsgTissueInfo): UIBot.Common.MsgTissueInfo;

            /**
             * Encodes the specified MsgTissueInfo message. Does not implicitly {@link UIBot.Common.MsgTissueInfo.verify|verify} messages.
             * @param message MsgTissueInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgTissueInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgTissueInfo message, length delimited. Does not implicitly {@link UIBot.Common.MsgTissueInfo.verify|verify} messages.
             * @param message MsgTissueInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgTissueInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgTissueInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgTissueInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgTissueInfo;

            /**
             * Decodes a MsgTissueInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgTissueInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgTissueInfo;

            /**
             * Verifies a MsgTissueInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgTissueInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgTissueInfo
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgTissueInfo;

            /**
             * Creates a plain object from a MsgTissueInfo message. Also converts values to other types if specified.
             * @param message MsgTissueInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgTissueInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgTissueInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgTissueInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgTissueList. */
        interface IMsgTissueList {

            /** MsgTissueList seriesuid */
            seriesuid?: (string|null);

            /** MsgTissueList tissueList */
            tissueList?: (UIBot.Common.IMsgTissueInfo[]|null);
        }

        /** Represents a MsgTissueList. */
        class MsgTissueList implements IMsgTissueList {

            /**
             * Constructs a new MsgTissueList.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgTissueList);

            /** MsgTissueList seriesuid. */
            public seriesuid: string;

            /** MsgTissueList tissueList. */
            public tissueList: UIBot.Common.IMsgTissueInfo[];

            /**
             * Creates a new MsgTissueList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgTissueList instance
             */
            public static create(properties?: UIBot.Common.IMsgTissueList): UIBot.Common.MsgTissueList;

            /**
             * Encodes the specified MsgTissueList message. Does not implicitly {@link UIBot.Common.MsgTissueList.verify|verify} messages.
             * @param message MsgTissueList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgTissueList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgTissueList message, length delimited. Does not implicitly {@link UIBot.Common.MsgTissueList.verify|verify} messages.
             * @param message MsgTissueList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgTissueList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgTissueList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgTissueList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgTissueList;

            /**
             * Decodes a MsgTissueList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgTissueList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgTissueList;

            /**
             * Verifies a MsgTissueList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgTissueList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgTissueList
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgTissueList;

            /**
             * Creates a plain object from a MsgTissueList message. Also converts values to other types if specified.
             * @param message MsgTissueList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgTissueList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgTissueList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgTissueList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** EnumNavigationBarItem enum. */
        enum EnumNavigationBarItem {
            NavigationBarItem_All = 1,
            NavigationBarItem_Pa = 2,
            NavigationBarItem_ExitPatient = 3,
            NavigationBarItem_ScreenRecording = 4,
            NavigationBarItem_Screenshot = 5,
            NavigationBarItem_StepBar = 6
        }

        /** Properties of a MsgChangeNavigationBarUIItemStatus. */
        interface IMsgChangeNavigationBarUIItemStatus {

            /** MsgChangeNavigationBarUIItemStatus eBarItem */
            eBarItem?: (UIBot.Common.EnumNavigationBarItem|null);

            /** MsgChangeNavigationBarUIItemStatus enable */
            enable?: (boolean|null);
        }

        /** Represents a MsgChangeNavigationBarUIItemStatus. */
        class MsgChangeNavigationBarUIItemStatus implements IMsgChangeNavigationBarUIItemStatus {

            /**
             * Constructs a new MsgChangeNavigationBarUIItemStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgChangeNavigationBarUIItemStatus);

            /** MsgChangeNavigationBarUIItemStatus eBarItem. */
            public eBarItem: UIBot.Common.EnumNavigationBarItem;

            /** MsgChangeNavigationBarUIItemStatus enable. */
            public enable: boolean;

            /**
             * Creates a new MsgChangeNavigationBarUIItemStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgChangeNavigationBarUIItemStatus instance
             */
            public static create(properties?: UIBot.Common.IMsgChangeNavigationBarUIItemStatus): UIBot.Common.MsgChangeNavigationBarUIItemStatus;

            /**
             * Encodes the specified MsgChangeNavigationBarUIItemStatus message. Does not implicitly {@link UIBot.Common.MsgChangeNavigationBarUIItemStatus.verify|verify} messages.
             * @param message MsgChangeNavigationBarUIItemStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgChangeNavigationBarUIItemStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgChangeNavigationBarUIItemStatus message, length delimited. Does not implicitly {@link UIBot.Common.MsgChangeNavigationBarUIItemStatus.verify|verify} messages.
             * @param message MsgChangeNavigationBarUIItemStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgChangeNavigationBarUIItemStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgChangeNavigationBarUIItemStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgChangeNavigationBarUIItemStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgChangeNavigationBarUIItemStatus;

            /**
             * Decodes a MsgChangeNavigationBarUIItemStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgChangeNavigationBarUIItemStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgChangeNavigationBarUIItemStatus;

            /**
             * Verifies a MsgChangeNavigationBarUIItemStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgChangeNavigationBarUIItemStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgChangeNavigationBarUIItemStatus
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgChangeNavigationBarUIItemStatus;

            /**
             * Creates a plain object from a MsgChangeNavigationBarUIItemStatus message. Also converts values to other types if specified.
             * @param message MsgChangeNavigationBarUIItemStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgChangeNavigationBarUIItemStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgChangeNavigationBarUIItemStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgChangeNavigationBarUIItemStatus
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgChangeNavigationBarUIItemStatusList. */
        interface IMsgChangeNavigationBarUIItemStatusList {

            /** MsgChangeNavigationBarUIItemStatusList msgNavigationBarUIItemStatus */
            msgNavigationBarUIItemStatus?: (UIBot.Common.IMsgChangeNavigationBarUIItemStatus[]|null);
        }

        /** Represents a MsgChangeNavigationBarUIItemStatusList. */
        class MsgChangeNavigationBarUIItemStatusList implements IMsgChangeNavigationBarUIItemStatusList {

            /**
             * Constructs a new MsgChangeNavigationBarUIItemStatusList.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgChangeNavigationBarUIItemStatusList);

            /** MsgChangeNavigationBarUIItemStatusList msgNavigationBarUIItemStatus. */
            public msgNavigationBarUIItemStatus: UIBot.Common.IMsgChangeNavigationBarUIItemStatus[];

            /**
             * Creates a new MsgChangeNavigationBarUIItemStatusList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgChangeNavigationBarUIItemStatusList instance
             */
            public static create(properties?: UIBot.Common.IMsgChangeNavigationBarUIItemStatusList): UIBot.Common.MsgChangeNavigationBarUIItemStatusList;

            /**
             * Encodes the specified MsgChangeNavigationBarUIItemStatusList message. Does not implicitly {@link UIBot.Common.MsgChangeNavigationBarUIItemStatusList.verify|verify} messages.
             * @param message MsgChangeNavigationBarUIItemStatusList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgChangeNavigationBarUIItemStatusList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgChangeNavigationBarUIItemStatusList message, length delimited. Does not implicitly {@link UIBot.Common.MsgChangeNavigationBarUIItemStatusList.verify|verify} messages.
             * @param message MsgChangeNavigationBarUIItemStatusList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgChangeNavigationBarUIItemStatusList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgChangeNavigationBarUIItemStatusList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgChangeNavigationBarUIItemStatusList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgChangeNavigationBarUIItemStatusList;

            /**
             * Decodes a MsgChangeNavigationBarUIItemStatusList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgChangeNavigationBarUIItemStatusList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgChangeNavigationBarUIItemStatusList;

            /**
             * Verifies a MsgChangeNavigationBarUIItemStatusList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgChangeNavigationBarUIItemStatusList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgChangeNavigationBarUIItemStatusList
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgChangeNavigationBarUIItemStatusList;

            /**
             * Creates a plain object from a MsgChangeNavigationBarUIItemStatusList message. Also converts values to other types if specified.
             * @param message MsgChangeNavigationBarUIItemStatusList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgChangeNavigationBarUIItemStatusList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgChangeNavigationBarUIItemStatusList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgChangeNavigationBarUIItemStatusList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgLayerFusionData. */
        interface IMsgLayerFusionData {

            /** MsgLayerFusionData LayerName */
            LayerName: string;

            /** MsgLayerFusionData IsVisible */
            IsVisible?: (boolean|null);

            /** MsgLayerFusionData BlendRatio */
            BlendRatio?: (number|null);

            /** MsgLayerFusionData IsSelected */
            IsSelected?: (boolean|null);
        }

        /** Represents a MsgLayerFusionData. */
        class MsgLayerFusionData implements IMsgLayerFusionData {

            /**
             * Constructs a new MsgLayerFusionData.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgLayerFusionData);

            /** MsgLayerFusionData LayerName. */
            public LayerName: string;

            /** MsgLayerFusionData IsVisible. */
            public IsVisible: boolean;

            /** MsgLayerFusionData BlendRatio. */
            public BlendRatio: number;

            /** MsgLayerFusionData IsSelected. */
            public IsSelected: boolean;

            /**
             * Creates a new MsgLayerFusionData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgLayerFusionData instance
             */
            public static create(properties?: UIBot.Common.IMsgLayerFusionData): UIBot.Common.MsgLayerFusionData;

            /**
             * Encodes the specified MsgLayerFusionData message. Does not implicitly {@link UIBot.Common.MsgLayerFusionData.verify|verify} messages.
             * @param message MsgLayerFusionData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgLayerFusionData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgLayerFusionData message, length delimited. Does not implicitly {@link UIBot.Common.MsgLayerFusionData.verify|verify} messages.
             * @param message MsgLayerFusionData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgLayerFusionData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgLayerFusionData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgLayerFusionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgLayerFusionData;

            /**
             * Decodes a MsgLayerFusionData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgLayerFusionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgLayerFusionData;

            /**
             * Verifies a MsgLayerFusionData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgLayerFusionData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgLayerFusionData
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgLayerFusionData;

            /**
             * Creates a plain object from a MsgLayerFusionData message. Also converts values to other types if specified.
             * @param message MsgLayerFusionData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgLayerFusionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgLayerFusionData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgLayerFusionData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgWorkStepFusionData. */
        interface IMsgWorkStepFusionData {

            /** MsgWorkStepFusionData curStepName */
            curStepName: string;

            /** MsgWorkStepFusionData curLayerFusion */
            curLayerFusion?: (UIBot.Common.IMsgLayerFusionData[]|null);
        }

        /** Represents a MsgWorkStepFusionData. */
        class MsgWorkStepFusionData implements IMsgWorkStepFusionData {

            /**
             * Constructs a new MsgWorkStepFusionData.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgWorkStepFusionData);

            /** MsgWorkStepFusionData curStepName. */
            public curStepName: string;

            /** MsgWorkStepFusionData curLayerFusion. */
            public curLayerFusion: UIBot.Common.IMsgLayerFusionData[];

            /**
             * Creates a new MsgWorkStepFusionData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgWorkStepFusionData instance
             */
            public static create(properties?: UIBot.Common.IMsgWorkStepFusionData): UIBot.Common.MsgWorkStepFusionData;

            /**
             * Encodes the specified MsgWorkStepFusionData message. Does not implicitly {@link UIBot.Common.MsgWorkStepFusionData.verify|verify} messages.
             * @param message MsgWorkStepFusionData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgWorkStepFusionData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgWorkStepFusionData message, length delimited. Does not implicitly {@link UIBot.Common.MsgWorkStepFusionData.verify|verify} messages.
             * @param message MsgWorkStepFusionData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgWorkStepFusionData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgWorkStepFusionData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgWorkStepFusionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgWorkStepFusionData;

            /**
             * Decodes a MsgWorkStepFusionData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgWorkStepFusionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgWorkStepFusionData;

            /**
             * Verifies a MsgWorkStepFusionData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgWorkStepFusionData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgWorkStepFusionData
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgWorkStepFusionData;

            /**
             * Creates a plain object from a MsgWorkStepFusionData message. Also converts values to other types if specified.
             * @param message MsgWorkStepFusionData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgWorkStepFusionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgWorkStepFusionData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgWorkStepFusionData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MsgPatientInfo. */
        interface IMsgPatientInfo {

            /** MsgPatientInfo Name */
            Name?: (string|null);

            /** MsgPatientInfo Sex */
            Sex?: (string|null);

            /** MsgPatientInfo ImageNum */
            ImageNum?: (string|null);

            /** MsgPatientInfo BirthDate */
            BirthDate?: (string|null);

            /** MsgPatientInfo StudyUIDs */
            StudyUIDs?: (string[]|null);
        }

        /** Represents a MsgPatientInfo. */
        class MsgPatientInfo implements IMsgPatientInfo {

            /**
             * Constructs a new MsgPatientInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: UIBot.Common.IMsgPatientInfo);

            /** MsgPatientInfo Name. */
            public Name: string;

            /** MsgPatientInfo Sex. */
            public Sex: string;

            /** MsgPatientInfo ImageNum. */
            public ImageNum: string;

            /** MsgPatientInfo BirthDate. */
            public BirthDate: string;

            /** MsgPatientInfo StudyUIDs. */
            public StudyUIDs: string[];

            /**
             * Creates a new MsgPatientInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgPatientInfo instance
             */
            public static create(properties?: UIBot.Common.IMsgPatientInfo): UIBot.Common.MsgPatientInfo;

            /**
             * Encodes the specified MsgPatientInfo message. Does not implicitly {@link UIBot.Common.MsgPatientInfo.verify|verify} messages.
             * @param message MsgPatientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UIBot.Common.IMsgPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgPatientInfo message, length delimited. Does not implicitly {@link UIBot.Common.MsgPatientInfo.verify|verify} messages.
             * @param message MsgPatientInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UIBot.Common.IMsgPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgPatientInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgPatientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.Common.MsgPatientInfo;

            /**
             * Decodes a MsgPatientInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgPatientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.Common.MsgPatientInfo;

            /**
             * Verifies a MsgPatientInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgPatientInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgPatientInfo
             */
            public static fromObject(object: { [k: string]: any }): UIBot.Common.MsgPatientInfo;

            /**
             * Creates a plain object from a MsgPatientInfo message. Also converts values to other types if specified.
             * @param message MsgPatientInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UIBot.Common.MsgPatientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgPatientInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MsgPatientInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace UHOR. */
    namespace UHOR {

        /** Namespace ProtoBuf. */
        namespace ProtoBuf {

            /** LoadLevel enum. */
            enum LoadLevel {
                Patient = 0,
                Study = 1,
                Series = 2,
                Image = 3
            }

            /** SeriseType enum. */
            enum SeriseType {
                SeriseT1 = 0,
                SeriseT2 = 1,
                SeriseBold = 2,
                SeriseDTI = 3,
                SeriseFlair = 4,
                SeriseSWI = 5,
                SeriseNone = 6
            }

            /** NeuroSeriseType enum. */
            enum NeuroSeriseType {
                NormalSerise = 0,
                DTIResultSerise = 1,
                BoldResultSerise = 2,
                PlanningResultSerise = 3,
                CTA = 4,
                PCA = 5,
                T1 = 6,
                T2 = 7,
                T1_Flair = 8,
                T2_Flair = 9,
                T1_C = 10,
                T2_C = 11,
                T1_Flair_C = 12,
                T2_Flair_C = 13
            }

            /** InterpolationOperationType enum. */
            enum InterpolationOperationType {
                ChangeOpacity = 1,
                ChangeVisible = 2
            }

            /** NeuroErrorCode enum. */
            enum NeuroErrorCode {
                Neuro_Success = 0,
                Neuro_Bold_Error = 257,
                Neuro_Bold_Missing_Active_Region_Error = 258,
                Neuro_Bold_Protocol_Info_Error = 259,
                Neuro_DTI_Error = 769,
                Neuro_DTI_Outside_Volume_Error = 770,
                Neuro_Hemorhage_Vessel_Segment_Error = 1281,
                Neuro_Hemorhage_Hemorrhage_Segment_Error = 1282,
                Neuro_Hemorhage_Hydroncus_Segment_Error = 1283,
                Neuro_Hemorhage_Skull_Extraction_Error = 1284,
                Neuro_Hemorhage_DrainageTube_Extraction_Error = 1285,
                Neuro_TumorBiopsies_Vessel_Segment_Error = 1793,
                Neuro_TumorBiopsies_TumorBiopsies_Segment_Error = 1794,
                Neuro_DBS_Vessel_Segment_Error = 2305,
                Neuro_DBS_BrainAltlases_Error = 2306,
                Neuro_DBS_ACPCVolumeUIDMatchCurrentVolumeUID_Error = 2307,
                Neuro_DBS_CorticalLandmarkCalculate_Error = 2308,
                Neuro_DBS_EditBrainAtlases_Error = 2309,
                Neuro_SEEG_Vessel_Segment_Error = 2817,
                Neuro_SEEG_Cucoloris_Error = 2818,
                Neuro_SEEG_Brain_Segmentation_Error = 2819,
                Neuro_Common_Marker_Auto_Add_Nail_Error = 8193,
                Neuro_Common_Marker_Auto_Add_Sphere_Error = 8194,
                Neuro_Common_Marker_Add_Marker_Duplicate_Error = 8195,
                Neuro_Common_Marker_Add_Marker_Limit_Exceeded_Error = 8196,
                Neuro_Common_ParcellationDKT_Error = 8197,
                Neuro_Common_BedboardRemovement_Error = 8198,
                Neuro_Common_NucleiExtract_Error = 8199,
                Neuro_Common_TissueGrow_Error = 8200,
                Neuro_Common_MultiPointsConnection_Error = 8201,
                Neuro_Common_Upload_Error = 8202,
                Neuro_Common_Upload_Success = 8203,
                Neuro_Common_No_Exit_User_Error = 8204,
                Neuro_Common_Could_Not_Connect_Error = 8205,
                Neuro_DataChecking_Validate_Error = 12289,
                Neuro_DataChecking_Dicom_Empty_Error = 12290,
                Neuro_DataChecking_Dicom_Absence_Error = 12291,
                Neuro_DataChecking_Dicom_Ori_Error = 12292,
                Neuro_DataChecking_Dicom_Space_Error = 12293,
                Neuro_DataChecking_Serise_Number_Error = 12294,
                Neuro_DataChecking_DTI_Missing_Ref_Sequence_Error = 12295,
                Neuro_DataChecking_BOLD_Missing_Ref_Sequence_Error = 12296,
                Neuro_DataChecking_Result_Not_Match_Error = 12297,
                Neuro_DataChecking_Result_Sequence_Error = 12301,
                Neuro_DataChecking_Load_Series_Error = 12302,
                Neuro_LoadPlanningResult_OtherApp_Error = 16385,
                Neuro_LoadPlanningResult_LoadData_Error = 16386,
                Neuro_SavePlanningResult_SaveData_Success = 16387,
                Neruo_SavePlanningResult_SaveData_Fail = 16388,
                Neruo_SavePlanningResult_SaveFiber_TooMuch = 16389
            }

            /** EnumPage enum. */
            enum EnumPage {
                Registration = 0,
                Segment = 1,
                PlanningStep = 2,
                DTI = 3
            }

            /** EnumTumorExpandSimulationAction enum. */
            enum EnumTumorExpandSimulationAction {
                Open = 0,
                Close = 1
            }

            /** EnumRegistrationType enum. */
            enum EnumRegistrationType {
                RoughAndPrecis = 0,
                OnlyRough = 1
            }

            /** Properties of a Point2DInt. */
            interface IPoint2DInt {

                /** Point2DInt x */
                x?: (number|null);

                /** Point2DInt y */
                y?: (number|null);
            }

            /** Represents a Point2DInt. */
            class Point2DInt implements IPoint2DInt {

                /**
                 * Constructs a new Point2DInt.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IPoint2DInt);

                /** Point2DInt x. */
                public x: number;

                /** Point2DInt y. */
                public y: number;

                /**
                 * Creates a new Point2DInt instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Point2DInt instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IPoint2DInt): UIBot.UHOR.ProtoBuf.Point2DInt;

                /**
                 * Encodes the specified Point2DInt message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.Point2DInt.verify|verify} messages.
                 * @param message Point2DInt message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IPoint2DInt, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Point2DInt message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.Point2DInt.verify|verify} messages.
                 * @param message Point2DInt message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IPoint2DInt, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Point2DInt message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Point2DInt
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.Point2DInt;

                /**
                 * Decodes a Point2DInt message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Point2DInt
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.Point2DInt;

                /**
                 * Verifies a Point2DInt message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Point2DInt message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Point2DInt
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.Point2DInt;

                /**
                 * Creates a plain object from a Point2DInt message. Also converts values to other types if specified.
                 * @param message Point2DInt
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.Point2DInt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Point2DInt to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Point2DInt
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Point3DDouble. */
            interface IPoint3DDouble {

                /** Point3DDouble x */
                x?: (number|null);

                /** Point3DDouble y */
                y?: (number|null);

                /** Point3DDouble z */
                z?: (number|null);
            }

            /** Represents a Point3DDouble. */
            class Point3DDouble implements IPoint3DDouble {

                /**
                 * Constructs a new Point3DDouble.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IPoint3DDouble);

                /** Point3DDouble x. */
                public x: number;

                /** Point3DDouble y. */
                public y: number;

                /** Point3DDouble z. */
                public z: number;

                /**
                 * Creates a new Point3DDouble instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Point3DDouble instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IPoint3DDouble): UIBot.UHOR.ProtoBuf.Point3DDouble;

                /**
                 * Encodes the specified Point3DDouble message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.Point3DDouble.verify|verify} messages.
                 * @param message Point3DDouble message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IPoint3DDouble, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Point3DDouble message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.Point3DDouble.verify|verify} messages.
                 * @param message Point3DDouble message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IPoint3DDouble, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Point3DDouble message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Point3DDouble
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.Point3DDouble;

                /**
                 * Decodes a Point3DDouble message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Point3DDouble
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.Point3DDouble;

                /**
                 * Verifies a Point3DDouble message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Point3DDouble message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Point3DDouble
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.Point3DDouble;

                /**
                 * Creates a plain object from a Point3DDouble message. Also converts values to other types if specified.
                 * @param message Point3DDouble
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.Point3DDouble, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Point3DDouble to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Point3DDouble
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgPointList. */
            interface IMsgPointList {

                /** MsgPointList PointList */
                PointList?: (UIBot.UHOR.ProtoBuf.IPoint2DInt[]|null);
            }

            /** Represents a MsgPointList. */
            class MsgPointList implements IMsgPointList {

                /**
                 * Constructs a new MsgPointList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgPointList);

                /** MsgPointList PointList. */
                public PointList: UIBot.UHOR.ProtoBuf.IPoint2DInt[];

                /**
                 * Creates a new MsgPointList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgPointList instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgPointList): UIBot.UHOR.ProtoBuf.MsgPointList;

                /**
                 * Encodes the specified MsgPointList message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgPointList.verify|verify} messages.
                 * @param message MsgPointList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgPointList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgPointList message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgPointList.verify|verify} messages.
                 * @param message MsgPointList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgPointList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgPointList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgPointList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgPointList;

                /**
                 * Decodes a MsgPointList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgPointList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgPointList;

                /**
                 * Verifies a MsgPointList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgPointList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgPointList
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgPointList;

                /**
                 * Creates a plain object from a MsgPointList message. Also converts values to other types if specified.
                 * @param message MsgPointList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgPointList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgPointList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgPointList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PatientInfo. */
            interface IPatientInfo {

                /** PatientInfo UID */
                UID?: (string|null);

                /** PatientInfo ID */
                ID?: (string|null);

                /** PatientInfo Name */
                Name?: (string|null);

                /** PatientInfo Gender */
                Gender?: (string|null);

                /** PatientInfo Age */
                Age?: (string|null);

                /** PatientInfo DateOfBirth */
                DateOfBirth?: (string|null);

                /** PatientInfo AccumulatedDosage */
                AccumulatedDosage?: (string|null);
            }

            /** Represents a PatientInfo. */
            class PatientInfo implements IPatientInfo {

                /**
                 * Constructs a new PatientInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IPatientInfo);

                /** PatientInfo UID. */
                public UID: string;

                /** PatientInfo ID. */
                public ID: string;

                /** PatientInfo Name. */
                public Name: string;

                /** PatientInfo Gender. */
                public Gender: string;

                /** PatientInfo Age. */
                public Age: string;

                /** PatientInfo DateOfBirth. */
                public DateOfBirth: string;

                /** PatientInfo AccumulatedDosage. */
                public AccumulatedDosage: string;

                /**
                 * Creates a new PatientInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PatientInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IPatientInfo): UIBot.UHOR.ProtoBuf.PatientInfo;

                /**
                 * Encodes the specified PatientInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.PatientInfo.verify|verify} messages.
                 * @param message PatientInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PatientInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.PatientInfo.verify|verify} messages.
                 * @param message PatientInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PatientInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PatientInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.PatientInfo;

                /**
                 * Decodes a PatientInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PatientInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.PatientInfo;

                /**
                 * Verifies a PatientInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PatientInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PatientInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.PatientInfo;

                /**
                 * Creates a plain object from a PatientInfo message. Also converts values to other types if specified.
                 * @param message PatientInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.PatientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PatientInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PatientInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ProcedureInfo. */
            interface IProcedureInfo {

                /** ProcedureInfo UID */
                UID?: (string|null);

                /** ProcedureInfo ID */
                ID?: (string|null);

                /** ProcedureInfo IsExamed */
                IsExamed?: (string|null);

                /** ProcedureInfo PatientPosition */
                PatientPosition?: (string|null);

                /** ProcedureInfo ParentStudy */
                ParentStudy?: (UIBot.UHOR.ProtoBuf.IStudyInfo|null);
            }

            /** Represents a ProcedureInfo. */
            class ProcedureInfo implements IProcedureInfo {

                /**
                 * Constructs a new ProcedureInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IProcedureInfo);

                /** ProcedureInfo UID. */
                public UID: string;

                /** ProcedureInfo ID. */
                public ID: string;

                /** ProcedureInfo IsExamed. */
                public IsExamed: string;

                /** ProcedureInfo PatientPosition. */
                public PatientPosition: string;

                /** ProcedureInfo ParentStudy. */
                public ParentStudy?: (UIBot.UHOR.ProtoBuf.IStudyInfo|null);

                /**
                 * Creates a new ProcedureInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProcedureInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IProcedureInfo): UIBot.UHOR.ProtoBuf.ProcedureInfo;

                /**
                 * Encodes the specified ProcedureInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ProcedureInfo.verify|verify} messages.
                 * @param message ProcedureInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IProcedureInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProcedureInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ProcedureInfo.verify|verify} messages.
                 * @param message ProcedureInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IProcedureInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProcedureInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProcedureInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ProcedureInfo;

                /**
                 * Decodes a ProcedureInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProcedureInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ProcedureInfo;

                /**
                 * Verifies a ProcedureInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProcedureInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProcedureInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ProcedureInfo;

                /**
                 * Creates a plain object from a ProcedureInfo message. Also converts values to other types if specified.
                 * @param message ProcedureInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ProcedureInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProcedureInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProcedureInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ImageInfo. */
            interface IImageInfo {

                /** ImageInfo UID */
                UID?: (string|null);

                /** ImageInfo ID */
                ID?: (string|null);

                /** ImageInfo FilePath */
                FilePath?: (string|null);

                /** ImageInfo ParentSeries */
                ParentSeries?: (UIBot.UHOR.ProtoBuf.ISeriesInfo|null);
            }

            /** Represents an ImageInfo. */
            class ImageInfo implements IImageInfo {

                /**
                 * Constructs a new ImageInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IImageInfo);

                /** ImageInfo UID. */
                public UID: string;

                /** ImageInfo ID. */
                public ID: string;

                /** ImageInfo FilePath. */
                public FilePath: string;

                /** ImageInfo ParentSeries. */
                public ParentSeries?: (UIBot.UHOR.ProtoBuf.ISeriesInfo|null);

                /**
                 * Creates a new ImageInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ImageInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IImageInfo): UIBot.UHOR.ProtoBuf.ImageInfo;

                /**
                 * Encodes the specified ImageInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ImageInfo.verify|verify} messages.
                 * @param message ImageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IImageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ImageInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ImageInfo.verify|verify} messages.
                 * @param message ImageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IImageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ImageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ImageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ImageInfo;

                /**
                 * Decodes an ImageInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ImageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ImageInfo;

                /**
                 * Verifies an ImageInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ImageInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ImageInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ImageInfo;

                /**
                 * Creates a plain object from an ImageInfo message. Also converts values to other types if specified.
                 * @param message ImageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ImageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ImageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ImageInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SeriesInfo. */
            interface ISeriesInfo {

                /** SeriesInfo UID */
                UID?: (string|null);

                /** SeriesInfo ID */
                ID?: (string|null);

                /** SeriesInfo ParentStudy */
                ParentStudy?: (UIBot.UHOR.ProtoBuf.IStudyInfo|null);
            }

            /** Represents a SeriesInfo. */
            class SeriesInfo implements ISeriesInfo {

                /**
                 * Constructs a new SeriesInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.ISeriesInfo);

                /** SeriesInfo UID. */
                public UID: string;

                /** SeriesInfo ID. */
                public ID: string;

                /** SeriesInfo ParentStudy. */
                public ParentStudy?: (UIBot.UHOR.ProtoBuf.IStudyInfo|null);

                /**
                 * Creates a new SeriesInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SeriesInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.ISeriesInfo): UIBot.UHOR.ProtoBuf.SeriesInfo;

                /**
                 * Encodes the specified SeriesInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.SeriesInfo.verify|verify} messages.
                 * @param message SeriesInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.ISeriesInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SeriesInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.SeriesInfo.verify|verify} messages.
                 * @param message SeriesInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.ISeriesInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SeriesInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SeriesInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.SeriesInfo;

                /**
                 * Decodes a SeriesInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SeriesInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.SeriesInfo;

                /**
                 * Verifies a SeriesInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SeriesInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SeriesInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.SeriesInfo;

                /**
                 * Creates a plain object from a SeriesInfo message. Also converts values to other types if specified.
                 * @param message SeriesInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.SeriesInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SeriesInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SeriesInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StudyInfo. */
            interface IStudyInfo {

                /** StudyInfo UID */
                UID?: (string|null);

                /** StudyInfo ID */
                ID?: (string|null);

                /** StudyInfo ExamStatus */
                ExamStatus?: (string|null);

                /** StudyInfo ExamPart */
                ExamPart?: (string[]|null);

                /** StudyInfo HasSeries */
                HasSeries?: (boolean|null);

                /** StudyInfo HasImage */
                HasImage?: (boolean|null);

                /** StudyInfo ModalityType */
                ModalityType?: (string|null);

                /** StudyInfo ParentPatient */
                ParentPatient?: (UIBot.UHOR.ProtoBuf.IPatientInfo|null);
            }

            /** Represents a StudyInfo. */
            class StudyInfo implements IStudyInfo {

                /**
                 * Constructs a new StudyInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IStudyInfo);

                /** StudyInfo UID. */
                public UID: string;

                /** StudyInfo ID. */
                public ID: string;

                /** StudyInfo ExamStatus. */
                public ExamStatus: string;

                /** StudyInfo ExamPart. */
                public ExamPart: string[];

                /** StudyInfo HasSeries. */
                public HasSeries: boolean;

                /** StudyInfo HasImage. */
                public HasImage: boolean;

                /** StudyInfo ModalityType. */
                public ModalityType: string;

                /** StudyInfo ParentPatient. */
                public ParentPatient?: (UIBot.UHOR.ProtoBuf.IPatientInfo|null);

                /**
                 * Creates a new StudyInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StudyInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IStudyInfo): UIBot.UHOR.ProtoBuf.StudyInfo;

                /**
                 * Encodes the specified StudyInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.StudyInfo.verify|verify} messages.
                 * @param message StudyInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IStudyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StudyInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.StudyInfo.verify|verify} messages.
                 * @param message StudyInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IStudyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StudyInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StudyInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.StudyInfo;

                /**
                 * Decodes a StudyInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StudyInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.StudyInfo;

                /**
                 * Verifies a StudyInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StudyInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StudyInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.StudyInfo;

                /**
                 * Creates a plain object from a StudyInfo message. Also converts values to other types if specified.
                 * @param message StudyInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.StudyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StudyInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StudyInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RawDataInfo. */
            interface IRawDataInfo {

                /** RawDataInfo RawInstanceUID */
                RawInstanceUID?: (string|null);
            }

            /** Represents a RawDataInfo. */
            class RawDataInfo implements IRawDataInfo {

                /**
                 * Constructs a new RawDataInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IRawDataInfo);

                /** RawDataInfo RawInstanceUID. */
                public RawInstanceUID: string;

                /**
                 * Creates a new RawDataInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RawDataInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IRawDataInfo): UIBot.UHOR.ProtoBuf.RawDataInfo;

                /**
                 * Encodes the specified RawDataInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.RawDataInfo.verify|verify} messages.
                 * @param message RawDataInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IRawDataInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RawDataInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.RawDataInfo.verify|verify} messages.
                 * @param message RawDataInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IRawDataInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RawDataInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RawDataInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.RawDataInfo;

                /**
                 * Decodes a RawDataInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RawDataInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.RawDataInfo;

                /**
                 * Verifies a RawDataInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RawDataInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RawDataInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.RawDataInfo;

                /**
                 * Creates a plain object from a RawDataInfo message. Also converts values to other types if specified.
                 * @param message RawDataInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.RawDataInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RawDataInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RawDataInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an InteractionInfo. */
            interface IInteractionInfo {

                /** InteractionInfo SrcAppName */
                SrcAppName?: (string|null);

                /** InteractionInfo DestAppName */
                DestAppName?: (string|null);

                /** InteractionInfo OperationID */
                OperationID?: (number|null);

                /** InteractionInfo Studies */
                Studies?: (UIBot.UHOR.ProtoBuf.IStudyInfo[]|null);

                /** InteractionInfo Patients */
                Patients?: (UIBot.UHOR.ProtoBuf.IPatientInfo[]|null);

                /** InteractionInfo Procedures */
                Procedures?: (UIBot.UHOR.ProtoBuf.IProcedureInfo[]|null);

                /** InteractionInfo Series */
                Series?: (UIBot.UHOR.ProtoBuf.ISeriesInfo[]|null);

                /** InteractionInfo Images */
                Images?: (UIBot.UHOR.ProtoBuf.IImageInfo[]|null);

                /** InteractionInfo CustomizedInfo */
                CustomizedInfo?: (string|null);

                /** InteractionInfo RawData */
                RawData?: (UIBot.UHOR.ProtoBuf.IRawDataInfo|null);

                /** InteractionInfo NlsAppName */
                NlsAppName?: (string|null);

                /** InteractionInfo ProcedureBuffer */
                ProcedureBuffer?: (string|null);

                /** InteractionInfo PreAttachFlag */
                PreAttachFlag?: (boolean|null);

                /** InteractionInfo Level */
                Level?: (UIBot.UHOR.ProtoBuf.LoadLevel|null);

                /** InteractionInfo TargetIsStudyList */
                TargetIsStudyList?: (boolean|null);

                /** InteractionInfo AllowAppend */
                AllowAppend?: (boolean|null);
            }

            /** Represents an InteractionInfo. */
            class InteractionInfo implements IInteractionInfo {

                /**
                 * Constructs a new InteractionInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IInteractionInfo);

                /** InteractionInfo SrcAppName. */
                public SrcAppName: string;

                /** InteractionInfo DestAppName. */
                public DestAppName: string;

                /** InteractionInfo OperationID. */
                public OperationID: number;

                /** InteractionInfo Studies. */
                public Studies: UIBot.UHOR.ProtoBuf.IStudyInfo[];

                /** InteractionInfo Patients. */
                public Patients: UIBot.UHOR.ProtoBuf.IPatientInfo[];

                /** InteractionInfo Procedures. */
                public Procedures: UIBot.UHOR.ProtoBuf.IProcedureInfo[];

                /** InteractionInfo Series. */
                public Series: UIBot.UHOR.ProtoBuf.ISeriesInfo[];

                /** InteractionInfo Images. */
                public Images: UIBot.UHOR.ProtoBuf.IImageInfo[];

                /** InteractionInfo CustomizedInfo. */
                public CustomizedInfo: string;

                /** InteractionInfo RawData. */
                public RawData?: (UIBot.UHOR.ProtoBuf.IRawDataInfo|null);

                /** InteractionInfo NlsAppName. */
                public NlsAppName: string;

                /** InteractionInfo ProcedureBuffer. */
                public ProcedureBuffer: string;

                /** InteractionInfo PreAttachFlag. */
                public PreAttachFlag: boolean;

                /** InteractionInfo Level. */
                public Level: UIBot.UHOR.ProtoBuf.LoadLevel;

                /** InteractionInfo TargetIsStudyList. */
                public TargetIsStudyList: boolean;

                /** InteractionInfo AllowAppend. */
                public AllowAppend: boolean;

                /**
                 * Creates a new InteractionInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InteractionInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IInteractionInfo): UIBot.UHOR.ProtoBuf.InteractionInfo;

                /**
                 * Encodes the specified InteractionInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.InteractionInfo.verify|verify} messages.
                 * @param message InteractionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IInteractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InteractionInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.InteractionInfo.verify|verify} messages.
                 * @param message InteractionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IInteractionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InteractionInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InteractionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.InteractionInfo;

                /**
                 * Decodes an InteractionInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InteractionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.InteractionInfo;

                /**
                 * Verifies an InteractionInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InteractionInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InteractionInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.InteractionInfo;

                /**
                 * Creates a plain object from an InteractionInfo message. Also converts values to other types if specified.
                 * @param message InteractionInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.InteractionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InteractionInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for InteractionInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BoldCalAgreementInfo. */
            interface IBoldCalAgreementInfo {

                /** BoldCalAgreementInfo ProtocalId */
                ProtocalId?: (string|null);

                /** BoldCalAgreementInfo ProtocalName */
                ProtocalName?: (string|null);

                /** BoldCalAgreementInfo BoldProtocolIdFk */
                BoldProtocolIdFk?: (string|null);

                /** BoldCalAgreementInfo ExperimentalcycleId */
                ExperimentalcycleId?: (string|null);

                /** BoldCalAgreementInfo GroupCount */
                GroupCount?: (number|null);

                /** BoldCalAgreementInfo IsDefault */
                IsDefault?: (boolean|null);

                /** BoldCalAgreementInfo BlockSize */
                BlockSize?: (number|null);

                /** BoldCalAgreementInfo ActiveTaskStartPoint */
                ActiveTaskStartPoint?: (number|null);

                /** BoldCalAgreementInfo ActiveTaskSize */
                ActiveTaskSize?: (number|null);

                /** BoldCalAgreementInfo IsRightAlign */
                IsRightAlign?: (boolean|null);

                /** BoldCalAgreementInfo StatisticsMethod */
                StatisticsMethod?: (string|null);

                /** BoldCalAgreementInfo IsSelected */
                IsSelected?: (boolean|null);

                /** BoldCalAgreementInfo StartOffsetValue */
                StartOffsetValue?: (number|null);

                /** BoldCalAgreementInfo StartOffsetIsEnabled */
                StartOffsetIsEnabled?: (boolean|null);

                /** BoldCalAgreementInfo StartOffsetIsChecked */
                StartOffsetIsChecked?: (boolean|null);

                /** BoldCalAgreementInfo SpatialFilterValue */
                SpatialFilterValue?: (number|null);

                /** BoldCalAgreementInfo SpatialFilterIsEnabled */
                SpatialFilterIsEnabled?: (boolean|null);

                /** BoldCalAgreementInfo SpatialFilterIsChecked */
                SpatialFilterIsChecked?: (boolean|null);

                /** BoldCalAgreementInfo SpatialFilterUnit */
                SpatialFilterUnit?: (string|null);

                /** BoldCalAgreementInfo TransitionSkipValue */
                TransitionSkipValue?: (number|null);

                /** BoldCalAgreementInfo TransitionSkipIsEnabled */
                TransitionSkipIsEnabled?: (boolean|null);

                /** BoldCalAgreementInfo TransitionSkipIsChecked */
                TransitionSkipIsChecked?: (boolean|null);

                /** BoldCalAgreementInfo TemporalFilterIsEnabled */
                TemporalFilterIsEnabled?: (boolean|null);

                /** BoldCalAgreementInfo TemporalFilterIsChecked */
                TemporalFilterIsChecked?: (boolean|null);

                /** BoldCalAgreementInfo HRFDeconvolutionIsEnabled */
                HRFDeconvolutionIsEnabled?: (boolean|null);

                /** BoldCalAgreementInfo HRFDeconvolutionIsChecked */
                HRFDeconvolutionIsChecked?: (boolean|null);

                /** BoldCalAgreementInfo InitialPvalue */
                InitialPvalue?: (number|null);

                /** BoldCalAgreementInfo SeriseDescription */
                SeriseDescription?: (string|null);
            }

            /** Represents a BoldCalAgreementInfo. */
            class BoldCalAgreementInfo implements IBoldCalAgreementInfo {

                /**
                 * Constructs a new BoldCalAgreementInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IBoldCalAgreementInfo);

                /** BoldCalAgreementInfo ProtocalId. */
                public ProtocalId: string;

                /** BoldCalAgreementInfo ProtocalName. */
                public ProtocalName: string;

                /** BoldCalAgreementInfo BoldProtocolIdFk. */
                public BoldProtocolIdFk: string;

                /** BoldCalAgreementInfo ExperimentalcycleId. */
                public ExperimentalcycleId: string;

                /** BoldCalAgreementInfo GroupCount. */
                public GroupCount: number;

                /** BoldCalAgreementInfo IsDefault. */
                public IsDefault: boolean;

                /** BoldCalAgreementInfo BlockSize. */
                public BlockSize: number;

                /** BoldCalAgreementInfo ActiveTaskStartPoint. */
                public ActiveTaskStartPoint: number;

                /** BoldCalAgreementInfo ActiveTaskSize. */
                public ActiveTaskSize: number;

                /** BoldCalAgreementInfo IsRightAlign. */
                public IsRightAlign: boolean;

                /** BoldCalAgreementInfo StatisticsMethod. */
                public StatisticsMethod: string;

                /** BoldCalAgreementInfo IsSelected. */
                public IsSelected: boolean;

                /** BoldCalAgreementInfo StartOffsetValue. */
                public StartOffsetValue: number;

                /** BoldCalAgreementInfo StartOffsetIsEnabled. */
                public StartOffsetIsEnabled: boolean;

                /** BoldCalAgreementInfo StartOffsetIsChecked. */
                public StartOffsetIsChecked: boolean;

                /** BoldCalAgreementInfo SpatialFilterValue. */
                public SpatialFilterValue: number;

                /** BoldCalAgreementInfo SpatialFilterIsEnabled. */
                public SpatialFilterIsEnabled: boolean;

                /** BoldCalAgreementInfo SpatialFilterIsChecked. */
                public SpatialFilterIsChecked: boolean;

                /** BoldCalAgreementInfo SpatialFilterUnit. */
                public SpatialFilterUnit: string;

                /** BoldCalAgreementInfo TransitionSkipValue. */
                public TransitionSkipValue: number;

                /** BoldCalAgreementInfo TransitionSkipIsEnabled. */
                public TransitionSkipIsEnabled: boolean;

                /** BoldCalAgreementInfo TransitionSkipIsChecked. */
                public TransitionSkipIsChecked: boolean;

                /** BoldCalAgreementInfo TemporalFilterIsEnabled. */
                public TemporalFilterIsEnabled: boolean;

                /** BoldCalAgreementInfo TemporalFilterIsChecked. */
                public TemporalFilterIsChecked: boolean;

                /** BoldCalAgreementInfo HRFDeconvolutionIsEnabled. */
                public HRFDeconvolutionIsEnabled: boolean;

                /** BoldCalAgreementInfo HRFDeconvolutionIsChecked. */
                public HRFDeconvolutionIsChecked: boolean;

                /** BoldCalAgreementInfo InitialPvalue. */
                public InitialPvalue: number;

                /** BoldCalAgreementInfo SeriseDescription. */
                public SeriseDescription: string;

                /**
                 * Creates a new BoldCalAgreementInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BoldCalAgreementInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IBoldCalAgreementInfo): UIBot.UHOR.ProtoBuf.BoldCalAgreementInfo;

                /**
                 * Encodes the specified BoldCalAgreementInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldCalAgreementInfo.verify|verify} messages.
                 * @param message BoldCalAgreementInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IBoldCalAgreementInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BoldCalAgreementInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldCalAgreementInfo.verify|verify} messages.
                 * @param message BoldCalAgreementInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IBoldCalAgreementInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BoldCalAgreementInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BoldCalAgreementInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.BoldCalAgreementInfo;

                /**
                 * Decodes a BoldCalAgreementInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BoldCalAgreementInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.BoldCalAgreementInfo;

                /**
                 * Verifies a BoldCalAgreementInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BoldCalAgreementInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BoldCalAgreementInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.BoldCalAgreementInfo;

                /**
                 * Creates a plain object from a BoldCalAgreementInfo message. Also converts values to other types if specified.
                 * @param message BoldCalAgreementInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.BoldCalAgreementInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BoldCalAgreementInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BoldCalAgreementInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BoldProtocolInfo. */
            interface IBoldProtocolInfo {

                /** BoldProtocolInfo protocolInfo */
                protocolInfo?: (UIBot.UHOR.ProtoBuf.IBoldCalAgreementInfo[]|null);
            }

            /** Represents a BoldProtocolInfo. */
            class BoldProtocolInfo implements IBoldProtocolInfo {

                /**
                 * Constructs a new BoldProtocolInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IBoldProtocolInfo);

                /** BoldProtocolInfo protocolInfo. */
                public protocolInfo: UIBot.UHOR.ProtoBuf.IBoldCalAgreementInfo[];

                /**
                 * Creates a new BoldProtocolInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BoldProtocolInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IBoldProtocolInfo): UIBot.UHOR.ProtoBuf.BoldProtocolInfo;

                /**
                 * Encodes the specified BoldProtocolInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldProtocolInfo.verify|verify} messages.
                 * @param message BoldProtocolInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IBoldProtocolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BoldProtocolInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldProtocolInfo.verify|verify} messages.
                 * @param message BoldProtocolInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IBoldProtocolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BoldProtocolInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BoldProtocolInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.BoldProtocolInfo;

                /**
                 * Decodes a BoldProtocolInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BoldProtocolInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.BoldProtocolInfo;

                /**
                 * Verifies a BoldProtocolInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BoldProtocolInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BoldProtocolInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.BoldProtocolInfo;

                /**
                 * Creates a plain object from a BoldProtocolInfo message. Also converts values to other types if specified.
                 * @param message BoldProtocolInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.BoldProtocolInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BoldProtocolInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BoldProtocolInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DTIProtocolInfo. */
            interface IDTIProtocolInfo {

                /** DTIProtocolInfo FAStartValue */
                FAStartValue?: (number|null);

                /** DTIProtocolInfo FAEndValue */
                FAEndValue?: (number|null);

                /** DTIProtocolInfo MaxLength */
                MaxLength?: (number|null);

                /** DTIProtocolInfo MinLength */
                MinLength?: (number|null);

                /** DTIProtocolInfo AngleValue */
                AngleValue?: (number|null);

                /** DTIProtocolInfo TraceValue */
                TraceValue?: (number|null);
            }

            /** Represents a DTIProtocolInfo. */
            class DTIProtocolInfo implements IDTIProtocolInfo {

                /**
                 * Constructs a new DTIProtocolInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IDTIProtocolInfo);

                /** DTIProtocolInfo FAStartValue. */
                public FAStartValue: number;

                /** DTIProtocolInfo FAEndValue. */
                public FAEndValue: number;

                /** DTIProtocolInfo MaxLength. */
                public MaxLength: number;

                /** DTIProtocolInfo MinLength. */
                public MinLength: number;

                /** DTIProtocolInfo AngleValue. */
                public AngleValue: number;

                /** DTIProtocolInfo TraceValue. */
                public TraceValue: number;

                /**
                 * Creates a new DTIProtocolInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DTIProtocolInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IDTIProtocolInfo): UIBot.UHOR.ProtoBuf.DTIProtocolInfo;

                /**
                 * Encodes the specified DTIProtocolInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.DTIProtocolInfo.verify|verify} messages.
                 * @param message DTIProtocolInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IDTIProtocolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DTIProtocolInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.DTIProtocolInfo.verify|verify} messages.
                 * @param message DTIProtocolInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IDTIProtocolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DTIProtocolInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DTIProtocolInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.DTIProtocolInfo;

                /**
                 * Decodes a DTIProtocolInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DTIProtocolInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.DTIProtocolInfo;

                /**
                 * Verifies a DTIProtocolInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DTIProtocolInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DTIProtocolInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.DTIProtocolInfo;

                /**
                 * Creates a plain object from a DTIProtocolInfo message. Also converts values to other types if specified.
                 * @param message DTIProtocolInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.DTIProtocolInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DTIProtocolInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DTIProtocolInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SeriesTypeInfo. */
            interface ISeriesTypeInfo {

                /** SeriesTypeInfo SeriesUID */
                SeriesUID?: (string|null);

                /** SeriesTypeInfo IsRefSeries */
                IsRefSeries?: (boolean|null);

                /** SeriesTypeInfo SeriseType */
                SeriseType?: (UIBot.UHOR.ProtoBuf.SeriseType|null);

                /** SeriesTypeInfo pseudoPosName */
                pseudoPosName?: (string|null);

                /** SeriesTypeInfo pseudoNegName */
                pseudoNegName?: (string|null);

                /** SeriesTypeInfo NeuroSeriseType */
                NeuroSeriseType?: (UIBot.UHOR.ProtoBuf.NeuroSeriseType|null);

                /** SeriesTypeInfo Thickness */
                Thickness?: (string|null);
            }

            /** Represents a SeriesTypeInfo. */
            class SeriesTypeInfo implements ISeriesTypeInfo {

                /**
                 * Constructs a new SeriesTypeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.ISeriesTypeInfo);

                /** SeriesTypeInfo SeriesUID. */
                public SeriesUID: string;

                /** SeriesTypeInfo IsRefSeries. */
                public IsRefSeries: boolean;

                /** SeriesTypeInfo SeriseType. */
                public SeriseType: UIBot.UHOR.ProtoBuf.SeriseType;

                /** SeriesTypeInfo pseudoPosName. */
                public pseudoPosName: string;

                /** SeriesTypeInfo pseudoNegName. */
                public pseudoNegName: string;

                /** SeriesTypeInfo NeuroSeriseType. */
                public NeuroSeriseType: UIBot.UHOR.ProtoBuf.NeuroSeriseType;

                /** SeriesTypeInfo Thickness. */
                public Thickness: string;

                /**
                 * Creates a new SeriesTypeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SeriesTypeInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.ISeriesTypeInfo): UIBot.UHOR.ProtoBuf.SeriesTypeInfo;

                /**
                 * Encodes the specified SeriesTypeInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.SeriesTypeInfo.verify|verify} messages.
                 * @param message SeriesTypeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.ISeriesTypeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SeriesTypeInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.SeriesTypeInfo.verify|verify} messages.
                 * @param message SeriesTypeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.ISeriesTypeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SeriesTypeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SeriesTypeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.SeriesTypeInfo;

                /**
                 * Decodes a SeriesTypeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SeriesTypeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.SeriesTypeInfo;

                /**
                 * Verifies a SeriesTypeInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SeriesTypeInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SeriesTypeInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.SeriesTypeInfo;

                /**
                 * Creates a plain object from a SeriesTypeInfo message. Also converts values to other types if specified.
                 * @param message SeriesTypeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.SeriesTypeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SeriesTypeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SeriesTypeInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SeriesTypeInfoList. */
            interface ISeriesTypeInfoList {

                /** SeriesTypeInfoList SeriesTypeInfoList */
                SeriesTypeInfoList?: (UIBot.UHOR.ProtoBuf.ISeriesTypeInfo[]|null);

                /** SeriesTypeInfoList sName */
                sName?: (string|null);

                /** SeriesTypeInfoList sSexType */
                sSexType?: (string|null);

                /** SeriesTypeInfoList sBirthday */
                sBirthday?: (string|null);

                /** SeriesTypeInfoList sStudyDate */
                sStudyDate?: (string|null);
            }

            /** Represents a SeriesTypeInfoList. */
            class SeriesTypeInfoList implements ISeriesTypeInfoList {

                /**
                 * Constructs a new SeriesTypeInfoList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.ISeriesTypeInfoList);

                /** SeriesTypeInfoList SeriesTypeInfoList. */
                public SeriesTypeInfoList: UIBot.UHOR.ProtoBuf.ISeriesTypeInfo[];

                /** SeriesTypeInfoList sName. */
                public sName: string;

                /** SeriesTypeInfoList sSexType. */
                public sSexType: string;

                /** SeriesTypeInfoList sBirthday. */
                public sBirthday: string;

                /** SeriesTypeInfoList sStudyDate. */
                public sStudyDate: string;

                /**
                 * Creates a new SeriesTypeInfoList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SeriesTypeInfoList instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.ISeriesTypeInfoList): UIBot.UHOR.ProtoBuf.SeriesTypeInfoList;

                /**
                 * Encodes the specified SeriesTypeInfoList message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.SeriesTypeInfoList.verify|verify} messages.
                 * @param message SeriesTypeInfoList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.ISeriesTypeInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SeriesTypeInfoList message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.SeriesTypeInfoList.verify|verify} messages.
                 * @param message SeriesTypeInfoList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.ISeriesTypeInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SeriesTypeInfoList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SeriesTypeInfoList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.SeriesTypeInfoList;

                /**
                 * Decodes a SeriesTypeInfoList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SeriesTypeInfoList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.SeriesTypeInfoList;

                /**
                 * Verifies a SeriesTypeInfoList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SeriesTypeInfoList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SeriesTypeInfoList
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.SeriesTypeInfoList;

                /**
                 * Creates a plain object from a SeriesTypeInfoList message. Also converts values to other types if specified.
                 * @param message SeriesTypeInfoList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.SeriesTypeInfoList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SeriesTypeInfoList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SeriesTypeInfoList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MocoCurveInfo. */
            interface IMocoCurveInfo {

                /** MocoCurveInfo UID */
                UID: string;

                /** MocoCurveInfo iSize */
                iSize: number;

                /** MocoCurveInfo sRx */
                sRx: string;

                /** MocoCurveInfo sRy */
                sRy: string;

                /** MocoCurveInfo sRz */
                sRz: string;

                /** MocoCurveInfo sTx */
                sTx: string;

                /** MocoCurveInfo sTy */
                sTy: string;

                /** MocoCurveInfo sTz */
                sTz: string;

                /** MocoCurveInfo sParadigm */
                sParadigm: string;
            }

            /** Represents a MocoCurveInfo. */
            class MocoCurveInfo implements IMocoCurveInfo {

                /**
                 * Constructs a new MocoCurveInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMocoCurveInfo);

                /** MocoCurveInfo UID. */
                public UID: string;

                /** MocoCurveInfo iSize. */
                public iSize: number;

                /** MocoCurveInfo sRx. */
                public sRx: string;

                /** MocoCurveInfo sRy. */
                public sRy: string;

                /** MocoCurveInfo sRz. */
                public sRz: string;

                /** MocoCurveInfo sTx. */
                public sTx: string;

                /** MocoCurveInfo sTy. */
                public sTy: string;

                /** MocoCurveInfo sTz. */
                public sTz: string;

                /** MocoCurveInfo sParadigm. */
                public sParadigm: string;

                /**
                 * Creates a new MocoCurveInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MocoCurveInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMocoCurveInfo): UIBot.UHOR.ProtoBuf.MocoCurveInfo;

                /**
                 * Encodes the specified MocoCurveInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MocoCurveInfo.verify|verify} messages.
                 * @param message MocoCurveInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMocoCurveInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MocoCurveInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MocoCurveInfo.verify|verify} messages.
                 * @param message MocoCurveInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMocoCurveInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MocoCurveInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MocoCurveInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MocoCurveInfo;

                /**
                 * Decodes a MocoCurveInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MocoCurveInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MocoCurveInfo;

                /**
                 * Verifies a MocoCurveInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MocoCurveInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MocoCurveInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MocoCurveInfo;

                /**
                 * Creates a plain object from a MocoCurveInfo message. Also converts values to other types if specified.
                 * @param message MocoCurveInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MocoCurveInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MocoCurveInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MocoCurveInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MocoCurveInfoList. */
            interface IMocoCurveInfoList {

                /** MocoCurveInfoList MocoCurveInfoList */
                MocoCurveInfoList?: (UIBot.UHOR.ProtoBuf.IMocoCurveInfo[]|null);
            }

            /** Represents a MocoCurveInfoList. */
            class MocoCurveInfoList implements IMocoCurveInfoList {

                /**
                 * Constructs a new MocoCurveInfoList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMocoCurveInfoList);

                /** MocoCurveInfoList MocoCurveInfoList. */
                public MocoCurveInfoList: UIBot.UHOR.ProtoBuf.IMocoCurveInfo[];

                /**
                 * Creates a new MocoCurveInfoList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MocoCurveInfoList instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMocoCurveInfoList): UIBot.UHOR.ProtoBuf.MocoCurveInfoList;

                /**
                 * Encodes the specified MocoCurveInfoList message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MocoCurveInfoList.verify|verify} messages.
                 * @param message MocoCurveInfoList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMocoCurveInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MocoCurveInfoList message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MocoCurveInfoList.verify|verify} messages.
                 * @param message MocoCurveInfoList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMocoCurveInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MocoCurveInfoList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MocoCurveInfoList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MocoCurveInfoList;

                /**
                 * Decodes a MocoCurveInfoList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MocoCurveInfoList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MocoCurveInfoList;

                /**
                 * Verifies a MocoCurveInfoList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MocoCurveInfoList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MocoCurveInfoList
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MocoCurveInfoList;

                /**
                 * Creates a plain object from a MocoCurveInfoList message. Also converts values to other types if specified.
                 * @param message MocoCurveInfoList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MocoCurveInfoList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MocoCurveInfoList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MocoCurveInfoList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgTrajectoryOper. */
            interface IMsgTrajectoryOper {

                /** MsgTrajectoryOper operType */
                operType: string;

                /** MsgTrajectoryOper index */
                index?: (number|null);

                /** MsgTrajectoryOper operValue */
                operValue?: (Uint8Array|null);
            }

            /** Represents a MsgTrajectoryOper. */
            class MsgTrajectoryOper implements IMsgTrajectoryOper {

                /**
                 * Constructs a new MsgTrajectoryOper.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgTrajectoryOper);

                /** MsgTrajectoryOper operType. */
                public operType: string;

                /** MsgTrajectoryOper index. */
                public index: number;

                /** MsgTrajectoryOper operValue. */
                public operValue: Uint8Array;

                /**
                 * Creates a new MsgTrajectoryOper instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgTrajectoryOper instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgTrajectoryOper): UIBot.UHOR.ProtoBuf.MsgTrajectoryOper;

                /**
                 * Encodes the specified MsgTrajectoryOper message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgTrajectoryOper.verify|verify} messages.
                 * @param message MsgTrajectoryOper message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgTrajectoryOper, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgTrajectoryOper message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgTrajectoryOper.verify|verify} messages.
                 * @param message MsgTrajectoryOper message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgTrajectoryOper, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgTrajectoryOper message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgTrajectoryOper
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgTrajectoryOper;

                /**
                 * Decodes a MsgTrajectoryOper message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgTrajectoryOper
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgTrajectoryOper;

                /**
                 * Verifies a MsgTrajectoryOper message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgTrajectoryOper message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgTrajectoryOper
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgTrajectoryOper;

                /**
                 * Creates a plain object from a MsgTrajectoryOper message. Also converts values to other types if specified.
                 * @param message MsgTrajectoryOper
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgTrajectoryOper, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgTrajectoryOper to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgTrajectoryOper
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgSetTrajectoryViewInfo. */
            interface IMsgSetTrajectoryViewInfo {

                /** MsgSetTrajectoryViewInfo CellName */
                CellName?: (string|null);
            }

            /** Represents a MsgSetTrajectoryViewInfo. */
            class MsgSetTrajectoryViewInfo implements IMsgSetTrajectoryViewInfo {

                /**
                 * Constructs a new MsgSetTrajectoryViewInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgSetTrajectoryViewInfo);

                /** MsgSetTrajectoryViewInfo CellName. */
                public CellName: string;

                /**
                 * Creates a new MsgSetTrajectoryViewInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgSetTrajectoryViewInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgSetTrajectoryViewInfo): UIBot.UHOR.ProtoBuf.MsgSetTrajectoryViewInfo;

                /**
                 * Encodes the specified MsgSetTrajectoryViewInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgSetTrajectoryViewInfo.verify|verify} messages.
                 * @param message MsgSetTrajectoryViewInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgSetTrajectoryViewInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgSetTrajectoryViewInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgSetTrajectoryViewInfo.verify|verify} messages.
                 * @param message MsgSetTrajectoryViewInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgSetTrajectoryViewInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgSetTrajectoryViewInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgSetTrajectoryViewInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgSetTrajectoryViewInfo;

                /**
                 * Decodes a MsgSetTrajectoryViewInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgSetTrajectoryViewInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgSetTrajectoryViewInfo;

                /**
                 * Verifies a MsgSetTrajectoryViewInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgSetTrajectoryViewInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgSetTrajectoryViewInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgSetTrajectoryViewInfo;

                /**
                 * Creates a plain object from a MsgSetTrajectoryViewInfo message. Also converts values to other types if specified.
                 * @param message MsgSetTrajectoryViewInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgSetTrajectoryViewInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgSetTrajectoryViewInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgSetTrajectoryViewInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgNeuroTrajectoryOtherInfo. */
            interface IMsgNeuroTrajectoryOtherInfo {

                /** MsgNeuroTrajectoryOtherInfo hasInterference */
                hasInterference?: (boolean|null);

                /** MsgNeuroTrajectoryOtherInfo countInterference_Blood */
                countInterference_Blood?: (number|null);

                /** MsgNeuroTrajectoryOtherInfo countInterference_Traj */
                countInterference_Traj?: (number|null);

                /** MsgNeuroTrajectoryOtherInfo idsInterference_Traj */
                idsInterference_Traj?: (string[]|null);

                /** MsgNeuroTrajectoryOtherInfo elecGroup */
                elecGroup?: (UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.IMsgElectrode[]|null);

                /** MsgNeuroTrajectoryOtherInfo elecDiameter */
                elecDiameter?: (number|null);

                /** MsgNeuroTrajectoryOtherInfo isElecEnable */
                isElecEnable?: (boolean|null);
            }

            /** Represents a MsgNeuroTrajectoryOtherInfo. */
            class MsgNeuroTrajectoryOtherInfo implements IMsgNeuroTrajectoryOtherInfo {

                /**
                 * Constructs a new MsgNeuroTrajectoryOtherInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgNeuroTrajectoryOtherInfo);

                /** MsgNeuroTrajectoryOtherInfo hasInterference. */
                public hasInterference: boolean;

                /** MsgNeuroTrajectoryOtherInfo countInterference_Blood. */
                public countInterference_Blood: number;

                /** MsgNeuroTrajectoryOtherInfo countInterference_Traj. */
                public countInterference_Traj: number;

                /** MsgNeuroTrajectoryOtherInfo idsInterference_Traj. */
                public idsInterference_Traj: string[];

                /** MsgNeuroTrajectoryOtherInfo elecGroup. */
                public elecGroup: UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.IMsgElectrode[];

                /** MsgNeuroTrajectoryOtherInfo elecDiameter. */
                public elecDiameter: number;

                /** MsgNeuroTrajectoryOtherInfo isElecEnable. */
                public isElecEnable: boolean;

                /**
                 * Creates a new MsgNeuroTrajectoryOtherInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgNeuroTrajectoryOtherInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgNeuroTrajectoryOtherInfo): UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo;

                /**
                 * Encodes the specified MsgNeuroTrajectoryOtherInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.verify|verify} messages.
                 * @param message MsgNeuroTrajectoryOtherInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgNeuroTrajectoryOtherInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgNeuroTrajectoryOtherInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.verify|verify} messages.
                 * @param message MsgNeuroTrajectoryOtherInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgNeuroTrajectoryOtherInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgNeuroTrajectoryOtherInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgNeuroTrajectoryOtherInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo;

                /**
                 * Decodes a MsgNeuroTrajectoryOtherInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgNeuroTrajectoryOtherInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo;

                /**
                 * Verifies a MsgNeuroTrajectoryOtherInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgNeuroTrajectoryOtherInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgNeuroTrajectoryOtherInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo;

                /**
                 * Creates a plain object from a MsgNeuroTrajectoryOtherInfo message. Also converts values to other types if specified.
                 * @param message MsgNeuroTrajectoryOtherInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgNeuroTrajectoryOtherInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgNeuroTrajectoryOtherInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace MsgNeuroTrajectoryOtherInfo {

                /** Properties of a MsgElectrode. */
                interface IMsgElectrode {

                    /** MsgElectrode elecLength */
                    elecLength: number;

                    /** MsgElectrode elecSpacing */
                    elecSpacing: number;
                }

                /** Represents a MsgElectrode. */
                class MsgElectrode implements IMsgElectrode {

                    /**
                     * Constructs a new MsgElectrode.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.IMsgElectrode);

                    /** MsgElectrode elecLength. */
                    public elecLength: number;

                    /** MsgElectrode elecSpacing. */
                    public elecSpacing: number;

                    /**
                     * Creates a new MsgElectrode instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgElectrode instance
                     */
                    public static create(properties?: UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.IMsgElectrode): UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.MsgElectrode;

                    /**
                     * Encodes the specified MsgElectrode message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.MsgElectrode.verify|verify} messages.
                     * @param message MsgElectrode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.IMsgElectrode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgElectrode message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.MsgElectrode.verify|verify} messages.
                     * @param message MsgElectrode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.IMsgElectrode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgElectrode message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgElectrode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.MsgElectrode;

                    /**
                     * Decodes a MsgElectrode message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgElectrode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.MsgElectrode;

                    /**
                     * Verifies a MsgElectrode message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgElectrode message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgElectrode
                     */
                    public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.MsgElectrode;

                    /**
                     * Creates a plain object from a MsgElectrode message. Also converts values to other types if specified.
                     * @param message MsgElectrode
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: UIBot.UHOR.ProtoBuf.MsgNeuroTrajectoryOtherInfo.MsgElectrode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgElectrode to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MsgElectrode
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a BoldRegionInfo. */
            interface IBoldRegionInfo {

                /** BoldRegionInfo iIdx */
                iIdx: number;

                /** BoldRegionInfo fArea */
                fArea?: (number|null);

                /** BoldRegionInfo sActiveType */
                sActiveType?: (number|null);

                /** BoldRegionInfo BrainArea */
                BrainArea?: (string|null);

                /** BoldRegionInfo BrodmanArea */
                BrodmanArea?: (string|null);

                /** BoldRegionInfo BrainAreaIdxs */
                BrainAreaIdxs?: (number[]|null);
            }

            /** Represents a BoldRegionInfo. */
            class BoldRegionInfo implements IBoldRegionInfo {

                /**
                 * Constructs a new BoldRegionInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IBoldRegionInfo);

                /** BoldRegionInfo iIdx. */
                public iIdx: number;

                /** BoldRegionInfo fArea. */
                public fArea: number;

                /** BoldRegionInfo sActiveType. */
                public sActiveType: number;

                /** BoldRegionInfo BrainArea. */
                public BrainArea: string;

                /** BoldRegionInfo BrodmanArea. */
                public BrodmanArea: string;

                /** BoldRegionInfo BrainAreaIdxs. */
                public BrainAreaIdxs: number[];

                /**
                 * Creates a new BoldRegionInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BoldRegionInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IBoldRegionInfo): UIBot.UHOR.ProtoBuf.BoldRegionInfo;

                /**
                 * Encodes the specified BoldRegionInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldRegionInfo.verify|verify} messages.
                 * @param message BoldRegionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IBoldRegionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BoldRegionInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldRegionInfo.verify|verify} messages.
                 * @param message BoldRegionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IBoldRegionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BoldRegionInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BoldRegionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.BoldRegionInfo;

                /**
                 * Decodes a BoldRegionInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BoldRegionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.BoldRegionInfo;

                /**
                 * Verifies a BoldRegionInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BoldRegionInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BoldRegionInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.BoldRegionInfo;

                /**
                 * Creates a plain object from a BoldRegionInfo message. Also converts values to other types if specified.
                 * @param message BoldRegionInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.BoldRegionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BoldRegionInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BoldRegionInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BoldRegionListInfo. */
            interface IBoldRegionListInfo {

                /** BoldRegionListInfo UID */
                UID: string;

                /** BoldRegionListInfo clusterSize */
                clusterSize: number;

                /** BoldRegionListInfo RegionVisibility */
                RegionVisibility: boolean;

                /** BoldRegionListInfo RegionOpacity */
                RegionOpacity: number;

                /** BoldRegionListInfo BoldRegion */
                BoldRegion?: (UIBot.UHOR.ProtoBuf.IBoldRegionInfo[]|null);
            }

            /** Represents a BoldRegionListInfo. */
            class BoldRegionListInfo implements IBoldRegionListInfo {

                /**
                 * Constructs a new BoldRegionListInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IBoldRegionListInfo);

                /** BoldRegionListInfo UID. */
                public UID: string;

                /** BoldRegionListInfo clusterSize. */
                public clusterSize: number;

                /** BoldRegionListInfo RegionVisibility. */
                public RegionVisibility: boolean;

                /** BoldRegionListInfo RegionOpacity. */
                public RegionOpacity: number;

                /** BoldRegionListInfo BoldRegion. */
                public BoldRegion: UIBot.UHOR.ProtoBuf.IBoldRegionInfo[];

                /**
                 * Creates a new BoldRegionListInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BoldRegionListInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IBoldRegionListInfo): UIBot.UHOR.ProtoBuf.BoldRegionListInfo;

                /**
                 * Encodes the specified BoldRegionListInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldRegionListInfo.verify|verify} messages.
                 * @param message BoldRegionListInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IBoldRegionListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BoldRegionListInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldRegionListInfo.verify|verify} messages.
                 * @param message BoldRegionListInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IBoldRegionListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BoldRegionListInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BoldRegionListInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.BoldRegionListInfo;

                /**
                 * Decodes a BoldRegionListInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BoldRegionListInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.BoldRegionListInfo;

                /**
                 * Verifies a BoldRegionListInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BoldRegionListInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BoldRegionListInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.BoldRegionListInfo;

                /**
                 * Creates a plain object from a BoldRegionListInfo message. Also converts values to other types if specified.
                 * @param message BoldRegionListInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.BoldRegionListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BoldRegionListInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BoldRegionListInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MultiBoldRegionInfo. */
            interface IMultiBoldRegionInfo {

                /** MultiBoldRegionInfo BoldRegionList */
                BoldRegionList?: (UIBot.UHOR.ProtoBuf.IBoldRegionListInfo[]|null);
            }

            /** Represents a MultiBoldRegionInfo. */
            class MultiBoldRegionInfo implements IMultiBoldRegionInfo {

                /**
                 * Constructs a new MultiBoldRegionInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMultiBoldRegionInfo);

                /** MultiBoldRegionInfo BoldRegionList. */
                public BoldRegionList: UIBot.UHOR.ProtoBuf.IBoldRegionListInfo[];

                /**
                 * Creates a new MultiBoldRegionInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MultiBoldRegionInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMultiBoldRegionInfo): UIBot.UHOR.ProtoBuf.MultiBoldRegionInfo;

                /**
                 * Encodes the specified MultiBoldRegionInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MultiBoldRegionInfo.verify|verify} messages.
                 * @param message MultiBoldRegionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMultiBoldRegionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MultiBoldRegionInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MultiBoldRegionInfo.verify|verify} messages.
                 * @param message MultiBoldRegionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMultiBoldRegionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MultiBoldRegionInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MultiBoldRegionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MultiBoldRegionInfo;

                /**
                 * Decodes a MultiBoldRegionInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MultiBoldRegionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MultiBoldRegionInfo;

                /**
                 * Verifies a MultiBoldRegionInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MultiBoldRegionInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MultiBoldRegionInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MultiBoldRegionInfo;

                /**
                 * Creates a plain object from a MultiBoldRegionInfo message. Also converts values to other types if specified.
                 * @param message MultiBoldRegionInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MultiBoldRegionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MultiBoldRegionInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MultiBoldRegionInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgMaskInfo. */
            interface IMsgMaskInfo {

                /** MsgMaskInfo length */
                length?: (number|null);

                /** MsgMaskInfo DimItem */
                DimItem?: (number[]|null);

                /** MsgMaskInfo spacingItem */
                spacingItem?: (number[]|null);

                /** MsgMaskInfo imageRowOrientation */
                imageRowOrientation?: (number[]|null);

                /** MsgMaskInfo imageColOrientation */
                imageColOrientation?: (number[]|null);

                /** MsgMaskInfo sliceOrientation */
                sliceOrientation?: (number[]|null);

                /** MsgMaskInfo imageOrigin */
                imageOrigin?: (number[]|null);

                /** MsgMaskInfo gradient */
                gradient?: (number[]|null);

                /** MsgMaskInfo intercept */
                intercept?: (number|null);

                /** MsgMaskInfo slope */
                slope?: (number|null);

                /** MsgMaskInfo fMaxGray */
                fMaxGray?: (number|null);

                /** MsgMaskInfo fMinGray */
                fMinGray?: (number|null);

                /** MsgMaskInfo windowLevel */
                windowLevel?: (number|null);

                /** MsgMaskInfo windowWidth */
                windowWidth?: (number|null);

                /** MsgMaskInfo data */
                data?: (Uint8Array|null);
            }

            /** Represents a MsgMaskInfo. */
            class MsgMaskInfo implements IMsgMaskInfo {

                /**
                 * Constructs a new MsgMaskInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgMaskInfo);

                /** MsgMaskInfo length. */
                public length: number;

                /** MsgMaskInfo DimItem. */
                public DimItem: number[];

                /** MsgMaskInfo spacingItem. */
                public spacingItem: number[];

                /** MsgMaskInfo imageRowOrientation. */
                public imageRowOrientation: number[];

                /** MsgMaskInfo imageColOrientation. */
                public imageColOrientation: number[];

                /** MsgMaskInfo sliceOrientation. */
                public sliceOrientation: number[];

                /** MsgMaskInfo imageOrigin. */
                public imageOrigin: number[];

                /** MsgMaskInfo gradient. */
                public gradient: number[];

                /** MsgMaskInfo intercept. */
                public intercept: number;

                /** MsgMaskInfo slope. */
                public slope: number;

                /** MsgMaskInfo fMaxGray. */
                public fMaxGray: number;

                /** MsgMaskInfo fMinGray. */
                public fMinGray: number;

                /** MsgMaskInfo windowLevel. */
                public windowLevel: number;

                /** MsgMaskInfo windowWidth. */
                public windowWidth: number;

                /** MsgMaskInfo data. */
                public data: Uint8Array;

                /**
                 * Creates a new MsgMaskInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgMaskInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgMaskInfo): UIBot.UHOR.ProtoBuf.MsgMaskInfo;

                /**
                 * Encodes the specified MsgMaskInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgMaskInfo.verify|verify} messages.
                 * @param message MsgMaskInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgMaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgMaskInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgMaskInfo.verify|verify} messages.
                 * @param message MsgMaskInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgMaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgMaskInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgMaskInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgMaskInfo;

                /**
                 * Decodes a MsgMaskInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgMaskInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgMaskInfo;

                /**
                 * Verifies a MsgMaskInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgMaskInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgMaskInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgMaskInfo;

                /**
                 * Creates a plain object from a MsgMaskInfo message. Also converts values to other types if specified.
                 * @param message MsgMaskInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgMaskInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgMaskInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgMaskInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ElectrodeInfo. */
            interface IElectrodeInfo {

                /** ElectrodeInfo contactNum */
                contactNum: number;

                /** ElectrodeInfo contactLength */
                contactLength: number;

                /** ElectrodeInfo contactDistance */
                contactDistance: number;

                /** ElectrodeInfo contactDiameter */
                contactDiameter: number;

                /** ElectrodeInfo contactTipDistance */
                contactTipDistance: number;

                /** ElectrodeInfo isShow */
                isShow: boolean;

                /** ElectrodeInfo infoIndex */
                infoIndex: number;

                /** ElectrodeInfo trajectoryID */
                trajectoryID: number;
            }

            /** Represents an ElectrodeInfo. */
            class ElectrodeInfo implements IElectrodeInfo {

                /**
                 * Constructs a new ElectrodeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IElectrodeInfo);

                /** ElectrodeInfo contactNum. */
                public contactNum: number;

                /** ElectrodeInfo contactLength. */
                public contactLength: number;

                /** ElectrodeInfo contactDistance. */
                public contactDistance: number;

                /** ElectrodeInfo contactDiameter. */
                public contactDiameter: number;

                /** ElectrodeInfo contactTipDistance. */
                public contactTipDistance: number;

                /** ElectrodeInfo isShow. */
                public isShow: boolean;

                /** ElectrodeInfo infoIndex. */
                public infoIndex: number;

                /** ElectrodeInfo trajectoryID. */
                public trajectoryID: number;

                /**
                 * Creates a new ElectrodeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ElectrodeInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IElectrodeInfo): UIBot.UHOR.ProtoBuf.ElectrodeInfo;

                /**
                 * Encodes the specified ElectrodeInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ElectrodeInfo.verify|verify} messages.
                 * @param message ElectrodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IElectrodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ElectrodeInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ElectrodeInfo.verify|verify} messages.
                 * @param message ElectrodeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IElectrodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ElectrodeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ElectrodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ElectrodeInfo;

                /**
                 * Decodes an ElectrodeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ElectrodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ElectrodeInfo;

                /**
                 * Verifies an ElectrodeInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ElectrodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ElectrodeInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ElectrodeInfo;

                /**
                 * Creates a plain object from an ElectrodeInfo message. Also converts values to other types if specified.
                 * @param message ElectrodeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ElectrodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ElectrodeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ElectrodeInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ElectrodeInfos. */
            interface IElectrodeInfos {

                /** ElectrodeInfos AllElectrodeInfos */
                AllElectrodeInfos?: (UIBot.UHOR.ProtoBuf.IElectrodeInfo[]|null);
            }

            /** Represents an ElectrodeInfos. */
            class ElectrodeInfos implements IElectrodeInfos {

                /**
                 * Constructs a new ElectrodeInfos.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IElectrodeInfos);

                /** ElectrodeInfos AllElectrodeInfos. */
                public AllElectrodeInfos: UIBot.UHOR.ProtoBuf.IElectrodeInfo[];

                /**
                 * Creates a new ElectrodeInfos instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ElectrodeInfos instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IElectrodeInfos): UIBot.UHOR.ProtoBuf.ElectrodeInfos;

                /**
                 * Encodes the specified ElectrodeInfos message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ElectrodeInfos.verify|verify} messages.
                 * @param message ElectrodeInfos message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IElectrodeInfos, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ElectrodeInfos message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ElectrodeInfos.verify|verify} messages.
                 * @param message ElectrodeInfos message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IElectrodeInfos, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ElectrodeInfos message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ElectrodeInfos
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ElectrodeInfos;

                /**
                 * Decodes an ElectrodeInfos message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ElectrodeInfos
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ElectrodeInfos;

                /**
                 * Verifies an ElectrodeInfos message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ElectrodeInfos message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ElectrodeInfos
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ElectrodeInfos;

                /**
                 * Creates a plain object from an ElectrodeInfos message. Also converts values to other types if specified.
                 * @param message ElectrodeInfos
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ElectrodeInfos, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ElectrodeInfos to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ElectrodeInfos
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ElectrodeEndPointCoordinate. */
            interface IElectrodeEndPointCoordinate {

                /** ElectrodeEndPointCoordinate x */
                x: number;

                /** ElectrodeEndPointCoordinate y */
                y: number;

                /** ElectrodeEndPointCoordinate z */
                z: number;
            }

            /** Represents an ElectrodeEndPointCoordinate. */
            class ElectrodeEndPointCoordinate implements IElectrodeEndPointCoordinate {

                /**
                 * Constructs a new ElectrodeEndPointCoordinate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IElectrodeEndPointCoordinate);

                /** ElectrodeEndPointCoordinate x. */
                public x: number;

                /** ElectrodeEndPointCoordinate y. */
                public y: number;

                /** ElectrodeEndPointCoordinate z. */
                public z: number;

                /**
                 * Creates a new ElectrodeEndPointCoordinate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ElectrodeEndPointCoordinate instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IElectrodeEndPointCoordinate): UIBot.UHOR.ProtoBuf.ElectrodeEndPointCoordinate;

                /**
                 * Encodes the specified ElectrodeEndPointCoordinate message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ElectrodeEndPointCoordinate.verify|verify} messages.
                 * @param message ElectrodeEndPointCoordinate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IElectrodeEndPointCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ElectrodeEndPointCoordinate message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ElectrodeEndPointCoordinate.verify|verify} messages.
                 * @param message ElectrodeEndPointCoordinate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IElectrodeEndPointCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ElectrodeEndPointCoordinate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ElectrodeEndPointCoordinate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ElectrodeEndPointCoordinate;

                /**
                 * Decodes an ElectrodeEndPointCoordinate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ElectrodeEndPointCoordinate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ElectrodeEndPointCoordinate;

                /**
                 * Verifies an ElectrodeEndPointCoordinate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ElectrodeEndPointCoordinate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ElectrodeEndPointCoordinate
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ElectrodeEndPointCoordinate;

                /**
                 * Creates a plain object from an ElectrodeEndPointCoordinate message. Also converts values to other types if specified.
                 * @param message ElectrodeEndPointCoordinate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ElectrodeEndPointCoordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ElectrodeEndPointCoordinate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ElectrodeEndPointCoordinate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ElectrodeETCoordinate. */
            interface IElectrodeETCoordinate {

                /** ElectrodeETCoordinate ETPoints */
                ETPoints?: (UIBot.UHOR.ProtoBuf.IElectrodeEndPointCoordinate[]|null);

                /** ElectrodeETCoordinate ConfigIndexInfo */
                ConfigIndexInfo: number;

                /** ElectrodeETCoordinate trajectoryID */
                trajectoryID: number;
            }

            /** Represents an ElectrodeETCoordinate. */
            class ElectrodeETCoordinate implements IElectrodeETCoordinate {

                /**
                 * Constructs a new ElectrodeETCoordinate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IElectrodeETCoordinate);

                /** ElectrodeETCoordinate ETPoints. */
                public ETPoints: UIBot.UHOR.ProtoBuf.IElectrodeEndPointCoordinate[];

                /** ElectrodeETCoordinate ConfigIndexInfo. */
                public ConfigIndexInfo: number;

                /** ElectrodeETCoordinate trajectoryID. */
                public trajectoryID: number;

                /**
                 * Creates a new ElectrodeETCoordinate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ElectrodeETCoordinate instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IElectrodeETCoordinate): UIBot.UHOR.ProtoBuf.ElectrodeETCoordinate;

                /**
                 * Encodes the specified ElectrodeETCoordinate message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ElectrodeETCoordinate.verify|verify} messages.
                 * @param message ElectrodeETCoordinate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IElectrodeETCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ElectrodeETCoordinate message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ElectrodeETCoordinate.verify|verify} messages.
                 * @param message ElectrodeETCoordinate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IElectrodeETCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ElectrodeETCoordinate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ElectrodeETCoordinate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ElectrodeETCoordinate;

                /**
                 * Decodes an ElectrodeETCoordinate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ElectrodeETCoordinate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ElectrodeETCoordinate;

                /**
                 * Verifies an ElectrodeETCoordinate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ElectrodeETCoordinate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ElectrodeETCoordinate
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ElectrodeETCoordinate;

                /**
                 * Creates a plain object from an ElectrodeETCoordinate message. Also converts values to other types if specified.
                 * @param message ElectrodeETCoordinate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ElectrodeETCoordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ElectrodeETCoordinate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ElectrodeETCoordinate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgSRRegInfo. */
            interface IMsgSRRegInfo {

                /** MsgSRRegInfo refSeriesuid */
                refSeriesuid?: (string|null);

                /** MsgSRRegInfo floatSeriesuid */
                floatSeriesuid?: (string|null);

                /** MsgSRRegInfo matrixItem */
                matrixItem?: (number[]|null);
            }

            /** Represents a MsgSRRegInfo. */
            class MsgSRRegInfo implements IMsgSRRegInfo {

                /**
                 * Constructs a new MsgSRRegInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgSRRegInfo);

                /** MsgSRRegInfo refSeriesuid. */
                public refSeriesuid: string;

                /** MsgSRRegInfo floatSeriesuid. */
                public floatSeriesuid: string;

                /** MsgSRRegInfo matrixItem. */
                public matrixItem: number[];

                /**
                 * Creates a new MsgSRRegInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgSRRegInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgSRRegInfo): UIBot.UHOR.ProtoBuf.MsgSRRegInfo;

                /**
                 * Encodes the specified MsgSRRegInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgSRRegInfo.verify|verify} messages.
                 * @param message MsgSRRegInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgSRRegInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgSRRegInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgSRRegInfo.verify|verify} messages.
                 * @param message MsgSRRegInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgSRRegInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgSRRegInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgSRRegInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgSRRegInfo;

                /**
                 * Decodes a MsgSRRegInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgSRRegInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgSRRegInfo;

                /**
                 * Verifies a MsgSRRegInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgSRRegInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgSRRegInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgSRRegInfo;

                /**
                 * Creates a plain object from a MsgSRRegInfo message. Also converts values to other types if specified.
                 * @param message MsgSRRegInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgSRRegInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgSRRegInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgSRRegInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PseudoColorInfo. */
            interface IPseudoColorInfo {

                /** PseudoColorInfo BoldUID */
                BoldUID?: (string|null);

                /** PseudoColorInfo ActivatePseudoName */
                ActivatePseudoName?: (string|null);

                /** PseudoColorInfo NegativePseudoName */
                NegativePseudoName?: (string|null);

                /** PseudoColorInfo Ext */
                Ext?: (string|null);
            }

            /** Represents a PseudoColorInfo. */
            class PseudoColorInfo implements IPseudoColorInfo {

                /**
                 * Constructs a new PseudoColorInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IPseudoColorInfo);

                /** PseudoColorInfo BoldUID. */
                public BoldUID: string;

                /** PseudoColorInfo ActivatePseudoName. */
                public ActivatePseudoName: string;

                /** PseudoColorInfo NegativePseudoName. */
                public NegativePseudoName: string;

                /** PseudoColorInfo Ext. */
                public Ext: string;

                /**
                 * Creates a new PseudoColorInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PseudoColorInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IPseudoColorInfo): UIBot.UHOR.ProtoBuf.PseudoColorInfo;

                /**
                 * Encodes the specified PseudoColorInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.PseudoColorInfo.verify|verify} messages.
                 * @param message PseudoColorInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IPseudoColorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PseudoColorInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.PseudoColorInfo.verify|verify} messages.
                 * @param message PseudoColorInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IPseudoColorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PseudoColorInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PseudoColorInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.PseudoColorInfo;

                /**
                 * Decodes a PseudoColorInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PseudoColorInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.PseudoColorInfo;

                /**
                 * Verifies a PseudoColorInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PseudoColorInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PseudoColorInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.PseudoColorInfo;

                /**
                 * Creates a plain object from a PseudoColorInfo message. Also converts values to other types if specified.
                 * @param message PseudoColorInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.PseudoColorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PseudoColorInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PseudoColorInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExportBoldRegionListInfo. */
            interface IExportBoldRegionListInfo {

                /** ExportBoldRegionListInfo UID */
                UID?: (string|null);

                /** ExportBoldRegionListInfo PseudoColorType */
                PseudoColorType?: (string|null);

                /** ExportBoldRegionListInfo BoldRegion */
                BoldRegion?: (UIBot.UHOR.ProtoBuf.IBoldRegionInfo[]|null);

                /** ExportBoldRegionListInfo UserID */
                UserID?: (string|null);
            }

            /** Represents an ExportBoldRegionListInfo. */
            class ExportBoldRegionListInfo implements IExportBoldRegionListInfo {

                /**
                 * Constructs a new ExportBoldRegionListInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IExportBoldRegionListInfo);

                /** ExportBoldRegionListInfo UID. */
                public UID: string;

                /** ExportBoldRegionListInfo PseudoColorType. */
                public PseudoColorType: string;

                /** ExportBoldRegionListInfo BoldRegion. */
                public BoldRegion: UIBot.UHOR.ProtoBuf.IBoldRegionInfo[];

                /** ExportBoldRegionListInfo UserID. */
                public UserID: string;

                /**
                 * Creates a new ExportBoldRegionListInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExportBoldRegionListInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IExportBoldRegionListInfo): UIBot.UHOR.ProtoBuf.ExportBoldRegionListInfo;

                /**
                 * Encodes the specified ExportBoldRegionListInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ExportBoldRegionListInfo.verify|verify} messages.
                 * @param message ExportBoldRegionListInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IExportBoldRegionListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExportBoldRegionListInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ExportBoldRegionListInfo.verify|verify} messages.
                 * @param message ExportBoldRegionListInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IExportBoldRegionListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExportBoldRegionListInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExportBoldRegionListInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ExportBoldRegionListInfo;

                /**
                 * Decodes an ExportBoldRegionListInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExportBoldRegionListInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ExportBoldRegionListInfo;

                /**
                 * Verifies an ExportBoldRegionListInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExportBoldRegionListInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExportBoldRegionListInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ExportBoldRegionListInfo;

                /**
                 * Creates a plain object from an ExportBoldRegionListInfo message. Also converts values to other types if specified.
                 * @param message ExportBoldRegionListInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ExportBoldRegionListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExportBoldRegionListInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExportBoldRegionListInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExportBoldRegionResultInfo. */
            interface IExportBoldRegionResultInfo {

                /** ExportBoldRegionResultInfo UID */
                UID?: (string|null);

                /** ExportBoldRegionResultInfo refSeriesuid */
                refSeriesuid?: (string|null);

                /** ExportBoldRegionResultInfo pseudoColorInfo */
                pseudoColorInfo?: (UIBot.UHOR.ProtoBuf.IPseudoColorInfo|null);

                /** ExportBoldRegionResultInfo BoldRegionResult */
                BoldRegionResult?: (UIBot.UHOR.ProtoBuf.IMsgMaskInfo|null);

                /** ExportBoldRegionResultInfo BoldRegionMask */
                BoldRegionMask?: (UIBot.UHOR.ProtoBuf.IMsgMaskInfo|null);

                /** ExportBoldRegionResultInfo regInfo */
                regInfo?: (UIBot.UHOR.ProtoBuf.IMsgSRRegInfo|null);

                /** ExportBoldRegionResultInfo ActiveBoldRegionLabels */
                ActiveBoldRegionLabels?: (number[]|null);

                /** ExportBoldRegionResultInfo ActiveBoldRegionLabelsFullName */
                ActiveBoldRegionLabelsFullName?: (string[]|null);

                /** ExportBoldRegionResultInfo BoldRegionForeignMask */
                BoldRegionForeignMask?: (UIBot.UHOR.ProtoBuf.IMsgMaskInfo|null);

                /** ExportBoldRegionResultInfo BoldThreshold */
                BoldThreshold?: (UIBot.UHOR.ProtoBuf.IBoldThreshold|null);
            }

            /** Represents an ExportBoldRegionResultInfo. */
            class ExportBoldRegionResultInfo implements IExportBoldRegionResultInfo {

                /**
                 * Constructs a new ExportBoldRegionResultInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IExportBoldRegionResultInfo);

                /** ExportBoldRegionResultInfo UID. */
                public UID: string;

                /** ExportBoldRegionResultInfo refSeriesuid. */
                public refSeriesuid: string;

                /** ExportBoldRegionResultInfo pseudoColorInfo. */
                public pseudoColorInfo?: (UIBot.UHOR.ProtoBuf.IPseudoColorInfo|null);

                /** ExportBoldRegionResultInfo BoldRegionResult. */
                public BoldRegionResult?: (UIBot.UHOR.ProtoBuf.IMsgMaskInfo|null);

                /** ExportBoldRegionResultInfo BoldRegionMask. */
                public BoldRegionMask?: (UIBot.UHOR.ProtoBuf.IMsgMaskInfo|null);

                /** ExportBoldRegionResultInfo regInfo. */
                public regInfo?: (UIBot.UHOR.ProtoBuf.IMsgSRRegInfo|null);

                /** ExportBoldRegionResultInfo ActiveBoldRegionLabels. */
                public ActiveBoldRegionLabels: number[];

                /** ExportBoldRegionResultInfo ActiveBoldRegionLabelsFullName. */
                public ActiveBoldRegionLabelsFullName: string[];

                /** ExportBoldRegionResultInfo BoldRegionForeignMask. */
                public BoldRegionForeignMask?: (UIBot.UHOR.ProtoBuf.IMsgMaskInfo|null);

                /** ExportBoldRegionResultInfo BoldThreshold. */
                public BoldThreshold?: (UIBot.UHOR.ProtoBuf.IBoldThreshold|null);

                /**
                 * Creates a new ExportBoldRegionResultInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExportBoldRegionResultInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IExportBoldRegionResultInfo): UIBot.UHOR.ProtoBuf.ExportBoldRegionResultInfo;

                /**
                 * Encodes the specified ExportBoldRegionResultInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ExportBoldRegionResultInfo.verify|verify} messages.
                 * @param message ExportBoldRegionResultInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IExportBoldRegionResultInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExportBoldRegionResultInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ExportBoldRegionResultInfo.verify|verify} messages.
                 * @param message ExportBoldRegionResultInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IExportBoldRegionResultInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExportBoldRegionResultInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExportBoldRegionResultInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ExportBoldRegionResultInfo;

                /**
                 * Decodes an ExportBoldRegionResultInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExportBoldRegionResultInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ExportBoldRegionResultInfo;

                /**
                 * Verifies an ExportBoldRegionResultInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExportBoldRegionResultInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExportBoldRegionResultInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ExportBoldRegionResultInfo;

                /**
                 * Creates a plain object from an ExportBoldRegionResultInfo message. Also converts values to other types if specified.
                 * @param message ExportBoldRegionResultInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ExportBoldRegionResultInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExportBoldRegionResultInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExportBoldRegionResultInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ChangeInterpolationStatus. */
            interface IChangeInterpolationStatus {

                /** ChangeInterpolationStatus BoldUID */
                BoldUID?: (string|null);

                /** ChangeInterpolationStatus Opacity */
                Opacity?: (number|null);

                /** ChangeInterpolationStatus Visible */
                Visible?: (boolean|null);

                /** ChangeInterpolationStatus OperationType */
                OperationType?: (UIBot.UHOR.ProtoBuf.InterpolationOperationType|null);
            }

            /** Represents a ChangeInterpolationStatus. */
            class ChangeInterpolationStatus implements IChangeInterpolationStatus {

                /**
                 * Constructs a new ChangeInterpolationStatus.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IChangeInterpolationStatus);

                /** ChangeInterpolationStatus BoldUID. */
                public BoldUID: string;

                /** ChangeInterpolationStatus Opacity. */
                public Opacity: number;

                /** ChangeInterpolationStatus Visible. */
                public Visible: boolean;

                /** ChangeInterpolationStatus OperationType. */
                public OperationType: UIBot.UHOR.ProtoBuf.InterpolationOperationType;

                /**
                 * Creates a new ChangeInterpolationStatus instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChangeInterpolationStatus instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IChangeInterpolationStatus): UIBot.UHOR.ProtoBuf.ChangeInterpolationStatus;

                /**
                 * Encodes the specified ChangeInterpolationStatus message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ChangeInterpolationStatus.verify|verify} messages.
                 * @param message ChangeInterpolationStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IChangeInterpolationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChangeInterpolationStatus message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ChangeInterpolationStatus.verify|verify} messages.
                 * @param message ChangeInterpolationStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IChangeInterpolationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChangeInterpolationStatus message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChangeInterpolationStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ChangeInterpolationStatus;

                /**
                 * Decodes a ChangeInterpolationStatus message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChangeInterpolationStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ChangeInterpolationStatus;

                /**
                 * Verifies a ChangeInterpolationStatus message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChangeInterpolationStatus message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChangeInterpolationStatus
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ChangeInterpolationStatus;

                /**
                 * Creates a plain object from a ChangeInterpolationStatus message. Also converts values to other types if specified.
                 * @param message ChangeInterpolationStatus
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ChangeInterpolationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChangeInterpolationStatus to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ChangeInterpolationStatus
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BoldThreshold. */
            interface IBoldThreshold {

                /** BoldThreshold PosMax */
                PosMax: number;

                /** BoldThreshold PosMin */
                PosMin: number;

                /** BoldThreshold NegMax */
                NegMax: number;

                /** BoldThreshold NegMin */
                NegMin: number;
            }

            /** Represents a BoldThreshold. */
            class BoldThreshold implements IBoldThreshold {

                /**
                 * Constructs a new BoldThreshold.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IBoldThreshold);

                /** BoldThreshold PosMax. */
                public PosMax: number;

                /** BoldThreshold PosMin. */
                public PosMin: number;

                /** BoldThreshold NegMax. */
                public NegMax: number;

                /** BoldThreshold NegMin. */
                public NegMin: number;

                /**
                 * Creates a new BoldThreshold instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BoldThreshold instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IBoldThreshold): UIBot.UHOR.ProtoBuf.BoldThreshold;

                /**
                 * Encodes the specified BoldThreshold message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldThreshold.verify|verify} messages.
                 * @param message BoldThreshold message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IBoldThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BoldThreshold message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BoldThreshold.verify|verify} messages.
                 * @param message BoldThreshold message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IBoldThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BoldThreshold message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BoldThreshold
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.BoldThreshold;

                /**
                 * Decodes a BoldThreshold message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BoldThreshold
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.BoldThreshold;

                /**
                 * Verifies a BoldThreshold message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BoldThreshold message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BoldThreshold
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.BoldThreshold;

                /**
                 * Creates a plain object from a BoldThreshold message. Also converts values to other types if specified.
                 * @param message BoldThreshold
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.BoldThreshold, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BoldThreshold to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BoldThreshold
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgColor. */
            interface IMsgColor {

                /** MsgColor red */
                red: number;

                /** MsgColor green */
                green: number;

                /** MsgColor blue */
                blue: number;

                /** MsgColor alpha */
                alpha: number;
            }

            /** Represents a MsgColor. */
            class MsgColor implements IMsgColor {

                /**
                 * Constructs a new MsgColor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgColor);

                /** MsgColor red. */
                public red: number;

                /** MsgColor green. */
                public green: number;

                /** MsgColor blue. */
                public blue: number;

                /** MsgColor alpha. */
                public alpha: number;

                /**
                 * Creates a new MsgColor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgColor instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgColor): UIBot.UHOR.ProtoBuf.MsgColor;

                /**
                 * Encodes the specified MsgColor message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgColor.verify|verify} messages.
                 * @param message MsgColor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgColor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgColor message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgColor.verify|verify} messages.
                 * @param message MsgColor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgColor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgColor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgColor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgColor;

                /**
                 * Decodes a MsgColor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgColor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgColor;

                /**
                 * Verifies a MsgColor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgColor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgColor
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgColor;

                /**
                 * Creates a plain object from a MsgColor message. Also converts values to other types if specified.
                 * @param message MsgColor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgColor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgColor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgColor
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StatisticResult. */
            interface IStatisticResult {

                /** StatisticResult elemCount */
                elemCount?: (number|null);

                /** StatisticResult volume */
                volume?: (number|null);

                /** StatisticResult mean */
                mean?: (number|null);

                /** StatisticResult staticMax */
                staticMax?: (number|null);

                /** StatisticResult staticMin */
                staticMin?: (number|null);

                /** StatisticResult staticStd */
                staticStd?: (number|null);

                /** StatisticResult maxX */
                maxX?: (number|null);

                /** StatisticResult maxY */
                maxY?: (number|null);

                /** StatisticResult maxZ */
                maxZ?: (number|null);

                /** StatisticResult sliceLocation */
                sliceLocation?: (number|null);

                /** StatisticResult peak */
                peak?: (number|null);

                /** StatisticResult rulerUnit */
                rulerUnit?: (string|null);

                /** StatisticResult valueUnit */
                valueUnit?: (string|null);
            }

            /** Represents a StatisticResult. */
            class StatisticResult implements IStatisticResult {

                /**
                 * Constructs a new StatisticResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IStatisticResult);

                /** StatisticResult elemCount. */
                public elemCount: number;

                /** StatisticResult volume. */
                public volume: number;

                /** StatisticResult mean. */
                public mean: number;

                /** StatisticResult staticMax. */
                public staticMax: number;

                /** StatisticResult staticMin. */
                public staticMin: number;

                /** StatisticResult staticStd. */
                public staticStd: number;

                /** StatisticResult maxX. */
                public maxX: number;

                /** StatisticResult maxY. */
                public maxY: number;

                /** StatisticResult maxZ. */
                public maxZ: number;

                /** StatisticResult sliceLocation. */
                public sliceLocation: number;

                /** StatisticResult peak. */
                public peak: number;

                /** StatisticResult rulerUnit. */
                public rulerUnit: string;

                /** StatisticResult valueUnit. */
                public valueUnit: string;

                /**
                 * Creates a new StatisticResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StatisticResult instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IStatisticResult): UIBot.UHOR.ProtoBuf.StatisticResult;

                /**
                 * Encodes the specified StatisticResult message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.StatisticResult.verify|verify} messages.
                 * @param message StatisticResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IStatisticResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StatisticResult message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.StatisticResult.verify|verify} messages.
                 * @param message StatisticResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IStatisticResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StatisticResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StatisticResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.StatisticResult;

                /**
                 * Decodes a StatisticResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StatisticResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.StatisticResult;

                /**
                 * Verifies a StatisticResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StatisticResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StatisticResult
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.StatisticResult;

                /**
                 * Creates a plain object from a StatisticResult message. Also converts values to other types if specified.
                 * @param message StatisticResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.StatisticResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StatisticResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StatisticResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgTissueInfo. */
            interface IMsgTissueInfo {

                /** MsgTissueInfo tissueId */
                tissueId: number;

                /** MsgTissueInfo name */
                name?: (string|null);

                /** MsgTissueInfo opacity */
                opacity?: (number|null);

                /** MsgTissueInfo color */
                color?: (UIBot.UHOR.ProtoBuf.IMsgColor|null);

                /** MsgTissueInfo vrtPath */
                vrtPath?: (string|null);

                /** MsgTissueInfo visibility */
                visibility?: (boolean|null);

                /** MsgTissueInfo isLocked */
                isLocked?: (boolean|null);

                /** MsgTissueInfo deleteEnabled */
                deleteEnabled?: (boolean|null);

                /** MsgTissueInfo isSelected */
                isSelected?: (boolean|null);

                /** MsgTissueInfo isDisplayStatistic */
                isDisplayStatistic?: (boolean|null);

                /** MsgTissueInfo isUseVrt */
                isUseVrt?: (boolean|null);

                /** MsgTissueInfo tissueType */
                tissueType?: (number|null);

                /** MsgTissueInfo tissueBasis */
                tissueBasis?: (string|null);

                /** MsgTissueInfo appInfo */
                appInfo?: (Uint8Array|null);

                /** MsgTissueInfo tissueComments */
                tissueComments?: (string|null);

                /** MsgTissueInfo tissueRefUidVisible */
                tissueRefUidVisible?: (boolean|null);

                /** MsgTissueInfo labels */
                labels?: (number[]|null);

                /** MsgTissueInfo tissueStatic */
                tissueStatic?: (UIBot.UHOR.ProtoBuf.IStatisticResult|null);

                /** MsgTissueInfo stateOnMpr */
                stateOnMpr?: (Uint8Array|null);

                /** MsgTissueInfo stateOnVr */
                stateOnVr?: (Uint8Array|null);

                /** MsgTissueInfo cellname */
                cellname?: (string|null);
            }

            /** Represents a MsgTissueInfo. */
            class MsgTissueInfo implements IMsgTissueInfo {

                /**
                 * Constructs a new MsgTissueInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgTissueInfo);

                /** MsgTissueInfo tissueId. */
                public tissueId: number;

                /** MsgTissueInfo name. */
                public name: string;

                /** MsgTissueInfo opacity. */
                public opacity: number;

                /** MsgTissueInfo color. */
                public color?: (UIBot.UHOR.ProtoBuf.IMsgColor|null);

                /** MsgTissueInfo vrtPath. */
                public vrtPath: string;

                /** MsgTissueInfo visibility. */
                public visibility: boolean;

                /** MsgTissueInfo isLocked. */
                public isLocked: boolean;

                /** MsgTissueInfo deleteEnabled. */
                public deleteEnabled: boolean;

                /** MsgTissueInfo isSelected. */
                public isSelected: boolean;

                /** MsgTissueInfo isDisplayStatistic. */
                public isDisplayStatistic: boolean;

                /** MsgTissueInfo isUseVrt. */
                public isUseVrt: boolean;

                /** MsgTissueInfo tissueType. */
                public tissueType: number;

                /** MsgTissueInfo tissueBasis. */
                public tissueBasis: string;

                /** MsgTissueInfo appInfo. */
                public appInfo: Uint8Array;

                /** MsgTissueInfo tissueComments. */
                public tissueComments: string;

                /** MsgTissueInfo tissueRefUidVisible. */
                public tissueRefUidVisible: boolean;

                /** MsgTissueInfo labels. */
                public labels: number[];

                /** MsgTissueInfo tissueStatic. */
                public tissueStatic?: (UIBot.UHOR.ProtoBuf.IStatisticResult|null);

                /** MsgTissueInfo stateOnMpr. */
                public stateOnMpr: Uint8Array;

                /** MsgTissueInfo stateOnVr. */
                public stateOnVr: Uint8Array;

                /** MsgTissueInfo cellname. */
                public cellname: string;

                /**
                 * Creates a new MsgTissueInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgTissueInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgTissueInfo): UIBot.UHOR.ProtoBuf.MsgTissueInfo;

                /**
                 * Encodes the specified MsgTissueInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgTissueInfo.verify|verify} messages.
                 * @param message MsgTissueInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgTissueInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgTissueInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgTissueInfo.verify|verify} messages.
                 * @param message MsgTissueInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgTissueInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgTissueInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgTissueInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgTissueInfo;

                /**
                 * Decodes a MsgTissueInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgTissueInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgTissueInfo;

                /**
                 * Verifies a MsgTissueInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgTissueInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgTissueInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgTissueInfo;

                /**
                 * Creates a plain object from a MsgTissueInfo message. Also converts values to other types if specified.
                 * @param message MsgTissueInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgTissueInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgTissueInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgTissueInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgTissueList. */
            interface IMsgTissueList {

                /** MsgTissueList seriesuid */
                seriesuid?: (string|null);

                /** MsgTissueList tissueList */
                tissueList?: (UIBot.UHOR.ProtoBuf.IMsgTissueInfo[]|null);
            }

            /** Represents a MsgTissueList. */
            class MsgTissueList implements IMsgTissueList {

                /**
                 * Constructs a new MsgTissueList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgTissueList);

                /** MsgTissueList seriesuid. */
                public seriesuid: string;

                /** MsgTissueList tissueList. */
                public tissueList: UIBot.UHOR.ProtoBuf.IMsgTissueInfo[];

                /**
                 * Creates a new MsgTissueList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgTissueList instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgTissueList): UIBot.UHOR.ProtoBuf.MsgTissueList;

                /**
                 * Encodes the specified MsgTissueList message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgTissueList.verify|verify} messages.
                 * @param message MsgTissueList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgTissueList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgTissueList message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgTissueList.verify|verify} messages.
                 * @param message MsgTissueList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgTissueList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgTissueList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgTissueList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgTissueList;

                /**
                 * Decodes a MsgTissueList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgTissueList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgTissueList;

                /**
                 * Verifies a MsgTissueList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgTissueList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgTissueList
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgTissueList;

                /**
                 * Creates a plain object from a MsgTissueList message. Also converts values to other types if specified.
                 * @param message MsgTissueList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgTissueList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgTissueList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgTissueList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgVOIInfo. */
            interface IMsgVOIInfo {

                /** MsgVOIInfo maskID */
                maskID: string;

                /** MsgVOIInfo outerlinePointList */
                outerlinePointList?: (UIBot.UHOR.ProtoBuf.IMsgPointList[]|null);

                /** MsgVOIInfo innerlinePointList */
                innerlinePointList?: (UIBot.UHOR.ProtoBuf.IMsgPointList[]|null);

                /** MsgVOIInfo unit */
                unit?: (string|null);

                /** MsgVOIInfo isVisible */
                isVisible?: (boolean|null);

                /** MsgVOIInfo opacity */
                opacity?: (number|null);

                /** MsgVOIInfo color */
                color?: (UIBot.UHOR.ProtoBuf.IMsgColor|null);

                /** MsgVOIInfo volumeUID */
                volumeUID?: (string|null);
            }

            /** Represents a MsgVOIInfo. */
            class MsgVOIInfo implements IMsgVOIInfo {

                /**
                 * Constructs a new MsgVOIInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgVOIInfo);

                /** MsgVOIInfo maskID. */
                public maskID: string;

                /** MsgVOIInfo outerlinePointList. */
                public outerlinePointList: UIBot.UHOR.ProtoBuf.IMsgPointList[];

                /** MsgVOIInfo innerlinePointList. */
                public innerlinePointList: UIBot.UHOR.ProtoBuf.IMsgPointList[];

                /** MsgVOIInfo unit. */
                public unit: string;

                /** MsgVOIInfo isVisible. */
                public isVisible: boolean;

                /** MsgVOIInfo opacity. */
                public opacity: number;

                /** MsgVOIInfo color. */
                public color?: (UIBot.UHOR.ProtoBuf.IMsgColor|null);

                /** MsgVOIInfo volumeUID. */
                public volumeUID: string;

                /**
                 * Creates a new MsgVOIInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgVOIInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgVOIInfo): UIBot.UHOR.ProtoBuf.MsgVOIInfo;

                /**
                 * Encodes the specified MsgVOIInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgVOIInfo.verify|verify} messages.
                 * @param message MsgVOIInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgVOIInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgVOIInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgVOIInfo.verify|verify} messages.
                 * @param message MsgVOIInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgVOIInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgVOIInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgVOIInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgVOIInfo;

                /**
                 * Decodes a MsgVOIInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgVOIInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgVOIInfo;

                /**
                 * Verifies a MsgVOIInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgVOIInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgVOIInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgVOIInfo;

                /**
                 * Creates a plain object from a MsgVOIInfo message. Also converts values to other types if specified.
                 * @param message MsgVOIInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgVOIInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgVOIInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgVOIInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgVOIInfos. */
            interface IMsgVOIInfos {

                /** MsgVOIInfos count */
                count: number;

                /** MsgVOIInfos voiInfoList */
                voiInfoList?: (UIBot.UHOR.ProtoBuf.IMsgVOIInfo[]|null);
            }

            /** Represents a MsgVOIInfos. */
            class MsgVOIInfos implements IMsgVOIInfos {

                /**
                 * Constructs a new MsgVOIInfos.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgVOIInfos);

                /** MsgVOIInfos count. */
                public count: number;

                /** MsgVOIInfos voiInfoList. */
                public voiInfoList: UIBot.UHOR.ProtoBuf.IMsgVOIInfo[];

                /**
                 * Creates a new MsgVOIInfos instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgVOIInfos instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgVOIInfos): UIBot.UHOR.ProtoBuf.MsgVOIInfos;

                /**
                 * Encodes the specified MsgVOIInfos message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgVOIInfos.verify|verify} messages.
                 * @param message MsgVOIInfos message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgVOIInfos, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgVOIInfos message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgVOIInfos.verify|verify} messages.
                 * @param message MsgVOIInfos message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgVOIInfos, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgVOIInfos message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgVOIInfos
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgVOIInfos;

                /**
                 * Decodes a MsgVOIInfos message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgVOIInfos
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgVOIInfos;

                /**
                 * Verifies a MsgVOIInfos message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgVOIInfos message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgVOIInfos
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgVOIInfos;

                /**
                 * Creates a plain object from a MsgVOIInfos message. Also converts values to other types if specified.
                 * @param message MsgVOIInfos
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgVOIInfos, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgVOIInfos to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgVOIInfos
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageResult. */
            interface IMessageResult {

                /** MessageResult IsSuccess */
                IsSuccess?: (boolean|null);

                /** MessageResult ErrorCode */
                ErrorCode?: (UIBot.UHOR.ProtoBuf.NeuroErrorCode|null);

                /** MessageResult Info */
                Info?: (string|null);
            }

            /** Represents a MessageResult. */
            class MessageResult implements IMessageResult {

                /**
                 * Constructs a new MessageResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageResult);

                /** MessageResult IsSuccess. */
                public IsSuccess: boolean;

                /** MessageResult ErrorCode. */
                public ErrorCode: UIBot.UHOR.ProtoBuf.NeuroErrorCode;

                /** MessageResult Info. */
                public Info: string;

                /**
                 * Creates a new MessageResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageResult instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageResult): UIBot.UHOR.ProtoBuf.MessageResult;

                /**
                 * Encodes the specified MessageResult message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageResult.verify|verify} messages.
                 * @param message MessageResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageResult message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageResult.verify|verify} messages.
                 * @param message MessageResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageResult;

                /**
                 * Decodes a MessageResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageResult;

                /**
                 * Verifies a MessageResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageResult
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageResult;

                /**
                 * Creates a plain object from a MessageResult message. Also converts values to other types if specified.
                 * @param message MessageResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTumorLongestPerpend. */
            interface IMessageTumorLongestPerpend {

                /** MessageTumorLongestPerpend MaskLabel */
                MaskLabel?: (number|null);

                /** MessageTumorLongestPerpend PtLongestStart */
                PtLongestStart?: (UIBot.UHOR.ProtoBuf.IPoint2DInt|null);

                /** MessageTumorLongestPerpend PtLongestEnd */
                PtLongestEnd?: (UIBot.UHOR.ProtoBuf.IPoint2DInt|null);

                /** MessageTumorLongestPerpend PtPerpendicularStart */
                PtPerpendicularStart?: (UIBot.UHOR.ProtoBuf.IPoint2DInt|null);

                /** MessageTumorLongestPerpend PtPerpendicularEnd */
                PtPerpendicularEnd?: (UIBot.UHOR.ProtoBuf.IPoint2DInt|null);

                /** MessageTumorLongestPerpend fLongestDiameter */
                fLongestDiameter?: (number|null);

                /** MessageTumorLongestPerpend fPerpendicularDiameter */
                fPerpendicularDiameter?: (number|null);
            }

            /** Represents a MessageTumorLongestPerpend. */
            class MessageTumorLongestPerpend implements IMessageTumorLongestPerpend {

                /**
                 * Constructs a new MessageTumorLongestPerpend.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpend);

                /** MessageTumorLongestPerpend MaskLabel. */
                public MaskLabel: number;

                /** MessageTumorLongestPerpend PtLongestStart. */
                public PtLongestStart?: (UIBot.UHOR.ProtoBuf.IPoint2DInt|null);

                /** MessageTumorLongestPerpend PtLongestEnd. */
                public PtLongestEnd?: (UIBot.UHOR.ProtoBuf.IPoint2DInt|null);

                /** MessageTumorLongestPerpend PtPerpendicularStart. */
                public PtPerpendicularStart?: (UIBot.UHOR.ProtoBuf.IPoint2DInt|null);

                /** MessageTumorLongestPerpend PtPerpendicularEnd. */
                public PtPerpendicularEnd?: (UIBot.UHOR.ProtoBuf.IPoint2DInt|null);

                /** MessageTumorLongestPerpend fLongestDiameter. */
                public fLongestDiameter: number;

                /** MessageTumorLongestPerpend fPerpendicularDiameter. */
                public fPerpendicularDiameter: number;

                /**
                 * Creates a new MessageTumorLongestPerpend instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTumorLongestPerpend instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpend): UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpend;

                /**
                 * Encodes the specified MessageTumorLongestPerpend message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpend.verify|verify} messages.
                 * @param message MessageTumorLongestPerpend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTumorLongestPerpend message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpend.verify|verify} messages.
                 * @param message MessageTumorLongestPerpend message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpend, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTumorLongestPerpend message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTumorLongestPerpend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpend;

                /**
                 * Decodes a MessageTumorLongestPerpend message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTumorLongestPerpend
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpend;

                /**
                 * Verifies a MessageTumorLongestPerpend message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTumorLongestPerpend message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTumorLongestPerpend
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpend;

                /**
                 * Creates a plain object from a MessageTumorLongestPerpend message. Also converts values to other types if specified.
                 * @param message MessageTumorLongestPerpend
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpend, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTumorLongestPerpend to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTumorLongestPerpend
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTumorLongestPerpendList. */
            interface IMessageTumorLongestPerpendList {

                /** MessageTumorLongestPerpendList item */
                item?: (UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpend[]|null);
            }

            /** Represents a MessageTumorLongestPerpendList. */
            class MessageTumorLongestPerpendList implements IMessageTumorLongestPerpendList {

                /**
                 * Constructs a new MessageTumorLongestPerpendList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpendList);

                /** MessageTumorLongestPerpendList item. */
                public item: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpend[];

                /**
                 * Creates a new MessageTumorLongestPerpendList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTumorLongestPerpendList instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpendList): UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpendList;

                /**
                 * Encodes the specified MessageTumorLongestPerpendList message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpendList.verify|verify} messages.
                 * @param message MessageTumorLongestPerpendList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpendList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTumorLongestPerpendList message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpendList.verify|verify} messages.
                 * @param message MessageTumorLongestPerpendList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTumorLongestPerpendList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTumorLongestPerpendList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTumorLongestPerpendList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpendList;

                /**
                 * Decodes a MessageTumorLongestPerpendList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTumorLongestPerpendList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpendList;

                /**
                 * Verifies a MessageTumorLongestPerpendList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTumorLongestPerpendList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTumorLongestPerpendList
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpendList;

                /**
                 * Creates a plain object from a MessageTumorLongestPerpendList message. Also converts values to other types if specified.
                 * @param message MessageTumorLongestPerpendList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTumorLongestPerpendList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTumorLongestPerpendList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTumorLongestPerpendList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgLayerFusionData. */
            interface IMsgLayerFusionData {

                /** MsgLayerFusionData LayerName */
                LayerName: string;

                /** MsgLayerFusionData IsVisible */
                IsVisible?: (boolean|null);

                /** MsgLayerFusionData BlendRatio */
                BlendRatio?: (number|null);

                /** MsgLayerFusionData IsSelected */
                IsSelected?: (boolean|null);
            }

            /** Represents a MsgLayerFusionData. */
            class MsgLayerFusionData implements IMsgLayerFusionData {

                /**
                 * Constructs a new MsgLayerFusionData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgLayerFusionData);

                /** MsgLayerFusionData LayerName. */
                public LayerName: string;

                /** MsgLayerFusionData IsVisible. */
                public IsVisible: boolean;

                /** MsgLayerFusionData BlendRatio. */
                public BlendRatio: number;

                /** MsgLayerFusionData IsSelected. */
                public IsSelected: boolean;

                /**
                 * Creates a new MsgLayerFusionData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgLayerFusionData instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgLayerFusionData): UIBot.UHOR.ProtoBuf.MsgLayerFusionData;

                /**
                 * Encodes the specified MsgLayerFusionData message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgLayerFusionData.verify|verify} messages.
                 * @param message MsgLayerFusionData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgLayerFusionData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgLayerFusionData message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgLayerFusionData.verify|verify} messages.
                 * @param message MsgLayerFusionData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgLayerFusionData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgLayerFusionData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgLayerFusionData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgLayerFusionData;

                /**
                 * Decodes a MsgLayerFusionData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgLayerFusionData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgLayerFusionData;

                /**
                 * Verifies a MsgLayerFusionData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgLayerFusionData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgLayerFusionData
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgLayerFusionData;

                /**
                 * Creates a plain object from a MsgLayerFusionData message. Also converts values to other types if specified.
                 * @param message MsgLayerFusionData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgLayerFusionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgLayerFusionData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgLayerFusionData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MsgWorkStepFusionData. */
            interface IMsgWorkStepFusionData {

                /** MsgWorkStepFusionData curStepName */
                curStepName: string;

                /** MsgWorkStepFusionData curLayerFusion */
                curLayerFusion?: (UIBot.UHOR.ProtoBuf.IMsgLayerFusionData[]|null);
            }

            /** Represents a MsgWorkStepFusionData. */
            class MsgWorkStepFusionData implements IMsgWorkStepFusionData {

                /**
                 * Constructs a new MsgWorkStepFusionData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMsgWorkStepFusionData);

                /** MsgWorkStepFusionData curStepName. */
                public curStepName: string;

                /** MsgWorkStepFusionData curLayerFusion. */
                public curLayerFusion: UIBot.UHOR.ProtoBuf.IMsgLayerFusionData[];

                /**
                 * Creates a new MsgWorkStepFusionData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MsgWorkStepFusionData instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMsgWorkStepFusionData): UIBot.UHOR.ProtoBuf.MsgWorkStepFusionData;

                /**
                 * Encodes the specified MsgWorkStepFusionData message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgWorkStepFusionData.verify|verify} messages.
                 * @param message MsgWorkStepFusionData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMsgWorkStepFusionData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MsgWorkStepFusionData message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MsgWorkStepFusionData.verify|verify} messages.
                 * @param message MsgWorkStepFusionData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMsgWorkStepFusionData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MsgWorkStepFusionData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MsgWorkStepFusionData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MsgWorkStepFusionData;

                /**
                 * Decodes a MsgWorkStepFusionData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MsgWorkStepFusionData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MsgWorkStepFusionData;

                /**
                 * Verifies a MsgWorkStepFusionData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MsgWorkStepFusionData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MsgWorkStepFusionData
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MsgWorkStepFusionData;

                /**
                 * Creates a plain object from a MsgWorkStepFusionData message. Also converts values to other types if specified.
                 * @param message MsgWorkStepFusionData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MsgWorkStepFusionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MsgWorkStepFusionData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MsgWorkStepFusionData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ThreeDMPRInfo. */
            interface IThreeDMPRInfo {

                /** ThreeDMPRInfo AxisDisplay */
                AxisDisplay: boolean;

                /** ThreeDMPRInfo SagittalDisplay */
                SagittalDisplay: boolean;

                /** ThreeDMPRInfo CornonalDisplay */
                CornonalDisplay: boolean;
            }

            /** Represents a ThreeDMPRInfo. */
            class ThreeDMPRInfo implements IThreeDMPRInfo {

                /**
                 * Constructs a new ThreeDMPRInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IThreeDMPRInfo);

                /** ThreeDMPRInfo AxisDisplay. */
                public AxisDisplay: boolean;

                /** ThreeDMPRInfo SagittalDisplay. */
                public SagittalDisplay: boolean;

                /** ThreeDMPRInfo CornonalDisplay. */
                public CornonalDisplay: boolean;

                /**
                 * Creates a new ThreeDMPRInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ThreeDMPRInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IThreeDMPRInfo): UIBot.UHOR.ProtoBuf.ThreeDMPRInfo;

                /**
                 * Encodes the specified ThreeDMPRInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ThreeDMPRInfo.verify|verify} messages.
                 * @param message ThreeDMPRInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IThreeDMPRInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ThreeDMPRInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ThreeDMPRInfo.verify|verify} messages.
                 * @param message ThreeDMPRInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IThreeDMPRInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ThreeDMPRInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ThreeDMPRInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ThreeDMPRInfo;

                /**
                 * Decodes a ThreeDMPRInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ThreeDMPRInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ThreeDMPRInfo;

                /**
                 * Verifies a ThreeDMPRInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ThreeDMPRInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ThreeDMPRInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ThreeDMPRInfo;

                /**
                 * Creates a plain object from a ThreeDMPRInfo message. Also converts values to other types if specified.
                 * @param message ThreeDMPRInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ThreeDMPRInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ThreeDMPRInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ThreeDMPRInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSwitchTab. */
            interface IMessageSwitchTab {

                /** MessageSwitchTab CurrentTabName */
                CurrentTabName?: (string|null);

                /** MessageSwitchTab NextTabName */
                NextTabName?: (string|null);

                /** MessageSwitchTab Info */
                Info?: (string|null);
            }

            /** Represents a MessageSwitchTab. */
            class MessageSwitchTab implements IMessageSwitchTab {

                /**
                 * Constructs a new MessageSwitchTab.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageSwitchTab);

                /** MessageSwitchTab CurrentTabName. */
                public CurrentTabName: string;

                /** MessageSwitchTab NextTabName. */
                public NextTabName: string;

                /** MessageSwitchTab Info. */
                public Info: string;

                /**
                 * Creates a new MessageSwitchTab instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSwitchTab instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageSwitchTab): UIBot.UHOR.ProtoBuf.MessageSwitchTab;

                /**
                 * Encodes the specified MessageSwitchTab message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageSwitchTab.verify|verify} messages.
                 * @param message MessageSwitchTab message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageSwitchTab, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSwitchTab message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageSwitchTab.verify|verify} messages.
                 * @param message MessageSwitchTab message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageSwitchTab, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSwitchTab message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSwitchTab
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageSwitchTab;

                /**
                 * Decodes a MessageSwitchTab message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageSwitchTab
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageSwitchTab;

                /**
                 * Verifies a MessageSwitchTab message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSwitchTab message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSwitchTab
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageSwitchTab;

                /**
                 * Creates a plain object from a MessageSwitchTab message. Also converts values to other types if specified.
                 * @param message MessageSwitchTab
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageSwitchTab, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSwitchTab to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageSwitchTab
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSwitchPageOperation. */
            interface IMessageSwitchPageOperation {

                /** MessageSwitchPageOperation CurrentPage */
                CurrentPage?: (UIBot.UHOR.ProtoBuf.EnumPage|null);

                /** MessageSwitchPageOperation NextPage */
                NextPage?: (UIBot.UHOR.ProtoBuf.EnumPage|null);

                /** MessageSwitchPageOperation Info */
                Info?: (string|null);
            }

            /** Represents a MessageSwitchPageOperation. */
            class MessageSwitchPageOperation implements IMessageSwitchPageOperation {

                /**
                 * Constructs a new MessageSwitchPageOperation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageSwitchPageOperation);

                /** MessageSwitchPageOperation CurrentPage. */
                public CurrentPage: UIBot.UHOR.ProtoBuf.EnumPage;

                /** MessageSwitchPageOperation NextPage. */
                public NextPage: UIBot.UHOR.ProtoBuf.EnumPage;

                /** MessageSwitchPageOperation Info. */
                public Info: string;

                /**
                 * Creates a new MessageSwitchPageOperation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSwitchPageOperation instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageSwitchPageOperation): UIBot.UHOR.ProtoBuf.MessageSwitchPageOperation;

                /**
                 * Encodes the specified MessageSwitchPageOperation message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageSwitchPageOperation.verify|verify} messages.
                 * @param message MessageSwitchPageOperation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageSwitchPageOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSwitchPageOperation message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageSwitchPageOperation.verify|verify} messages.
                 * @param message MessageSwitchPageOperation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageSwitchPageOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSwitchPageOperation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSwitchPageOperation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageSwitchPageOperation;

                /**
                 * Decodes a MessageSwitchPageOperation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageSwitchPageOperation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageSwitchPageOperation;

                /**
                 * Verifies a MessageSwitchPageOperation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSwitchPageOperation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSwitchPageOperation
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageSwitchPageOperation;

                /**
                 * Creates a plain object from a MessageSwitchPageOperation message. Also converts values to other types if specified.
                 * @param message MessageSwitchPageOperation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageSwitchPageOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSwitchPageOperation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageSwitchPageOperation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageDSACT. */
            interface IMessageDSACT {

                /** MessageDSACT CtUid */
                CtUid?: (string|null);

                /** MessageDSACT CtaUid */
                CtaUid?: (string|null);
            }

            /** Represents a MessageDSACT. */
            class MessageDSACT implements IMessageDSACT {

                /**
                 * Constructs a new MessageDSACT.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageDSACT);

                /** MessageDSACT CtUid. */
                public CtUid: string;

                /** MessageDSACT CtaUid. */
                public CtaUid: string;

                /**
                 * Creates a new MessageDSACT instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageDSACT instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageDSACT): UIBot.UHOR.ProtoBuf.MessageDSACT;

                /**
                 * Encodes the specified MessageDSACT message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageDSACT.verify|verify} messages.
                 * @param message MessageDSACT message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageDSACT, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageDSACT message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageDSACT.verify|verify} messages.
                 * @param message MessageDSACT message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageDSACT, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageDSACT message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageDSACT
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageDSACT;

                /**
                 * Decodes a MessageDSACT message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageDSACT
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageDSACT;

                /**
                 * Verifies a MessageDSACT message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageDSACT message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageDSACT
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageDSACT;

                /**
                 * Creates a plain object from a MessageDSACT message. Also converts values to other types if specified.
                 * @param message MessageDSACT
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageDSACT, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageDSACT to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageDSACT
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTissueGrowTips. */
            interface IMessageTissueGrowTips {

                /** MessageTissueGrowTips TipsCode */
                TipsCode?: (UIBot.UHOR.ProtoBuf.NeuroErrorCode|null);

                /** MessageTissueGrowTips TissueID */
                TissueID?: (number|null);
            }

            /** Represents a MessageTissueGrowTips. */
            class MessageTissueGrowTips implements IMessageTissueGrowTips {

                /**
                 * Constructs a new MessageTissueGrowTips.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueGrowTips);

                /** MessageTissueGrowTips TipsCode. */
                public TipsCode: UIBot.UHOR.ProtoBuf.NeuroErrorCode;

                /** MessageTissueGrowTips TissueID. */
                public TissueID: number;

                /**
                 * Creates a new MessageTissueGrowTips instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTissueGrowTips instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueGrowTips): UIBot.UHOR.ProtoBuf.MessageTissueGrowTips;

                /**
                 * Encodes the specified MessageTissueGrowTips message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueGrowTips.verify|verify} messages.
                 * @param message MessageTissueGrowTips message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTissueGrowTips, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTissueGrowTips message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueGrowTips.verify|verify} messages.
                 * @param message MessageTissueGrowTips message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTissueGrowTips, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTissueGrowTips message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTissueGrowTips
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTissueGrowTips;

                /**
                 * Decodes a MessageTissueGrowTips message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTissueGrowTips
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTissueGrowTips;

                /**
                 * Verifies a MessageTissueGrowTips message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTissueGrowTips message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTissueGrowTips
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTissueGrowTips;

                /**
                 * Creates a plain object from a MessageTissueGrowTips message. Also converts values to other types if specified.
                 * @param message MessageTissueGrowTips
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTissueGrowTips, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTissueGrowTips to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTissueGrowTips
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTumorExtractInfo. */
            interface IMessageTumorExtractInfo {

                /** MessageTumorExtractInfo MeshData */
                MeshData?: (string|null);

                /** MessageTumorExtractInfo Points */
                Points?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble[]|null);

                /** MessageTumorExtractInfo MaskComporessData */
                MaskComporessData?: (string|null);

                /** MessageTumorExtractInfo VolumeUID */
                VolumeUID?: (string|null);

                /** MessageTumorExtractInfo LongestStart */
                LongestStart?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble|null);

                /** MessageTumorExtractInfo LongestEnd */
                LongestEnd?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble|null);

                /** MessageTumorExtractInfo PerpendicularStart */
                PerpendicularStart?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble|null);

                /** MessageTumorExtractInfo PerpendicularEnd */
                PerpendicularEnd?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble|null);

                /** MessageTumorExtractInfo LongestDiameter */
                LongestDiameter?: (number|null);

                /** MessageTumorExtractInfo PerpendicularDiameter */
                PerpendicularDiameter?: (number|null);

                /** MessageTumorExtractInfo MaskLength */
                MaskLength?: (number|null);
            }

            /** Represents a MessageTumorExtractInfo. */
            class MessageTumorExtractInfo implements IMessageTumorExtractInfo {

                /**
                 * Constructs a new MessageTumorExtractInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorExtractInfo);

                /** MessageTumorExtractInfo MeshData. */
                public MeshData: string;

                /** MessageTumorExtractInfo Points. */
                public Points: UIBot.UHOR.ProtoBuf.IPoint3DDouble[];

                /** MessageTumorExtractInfo MaskComporessData. */
                public MaskComporessData: string;

                /** MessageTumorExtractInfo VolumeUID. */
                public VolumeUID: string;

                /** MessageTumorExtractInfo LongestStart. */
                public LongestStart?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble|null);

                /** MessageTumorExtractInfo LongestEnd. */
                public LongestEnd?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble|null);

                /** MessageTumorExtractInfo PerpendicularStart. */
                public PerpendicularStart?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble|null);

                /** MessageTumorExtractInfo PerpendicularEnd. */
                public PerpendicularEnd?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble|null);

                /** MessageTumorExtractInfo LongestDiameter. */
                public LongestDiameter: number;

                /** MessageTumorExtractInfo PerpendicularDiameter. */
                public PerpendicularDiameter: number;

                /** MessageTumorExtractInfo MaskLength. */
                public MaskLength: number;

                /**
                 * Creates a new MessageTumorExtractInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTumorExtractInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorExtractInfo): UIBot.UHOR.ProtoBuf.MessageTumorExtractInfo;

                /**
                 * Encodes the specified MessageTumorExtractInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorExtractInfo.verify|verify} messages.
                 * @param message MessageTumorExtractInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTumorExtractInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTumorExtractInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorExtractInfo.verify|verify} messages.
                 * @param message MessageTumorExtractInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTumorExtractInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTumorExtractInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTumorExtractInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTumorExtractInfo;

                /**
                 * Decodes a MessageTumorExtractInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTumorExtractInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTumorExtractInfo;

                /**
                 * Verifies a MessageTumorExtractInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTumorExtractInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTumorExtractInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTumorExtractInfo;

                /**
                 * Creates a plain object from a MessageTumorExtractInfo message. Also converts values to other types if specified.
                 * @param message MessageTumorExtractInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTumorExtractInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTumorExtractInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTumorExtractInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageContourPoints. */
            interface IMessageContourPoints {

                /** MessageContourPoints Points */
                Points?: (UIBot.UHOR.ProtoBuf.IPoint3DDouble[]|null);
            }

            /** Represents a MessageContourPoints. */
            class MessageContourPoints implements IMessageContourPoints {

                /**
                 * Constructs a new MessageContourPoints.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageContourPoints);

                /** MessageContourPoints Points. */
                public Points: UIBot.UHOR.ProtoBuf.IPoint3DDouble[];

                /**
                 * Creates a new MessageContourPoints instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageContourPoints instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageContourPoints): UIBot.UHOR.ProtoBuf.MessageContourPoints;

                /**
                 * Encodes the specified MessageContourPoints message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageContourPoints.verify|verify} messages.
                 * @param message MessageContourPoints message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageContourPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageContourPoints message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageContourPoints.verify|verify} messages.
                 * @param message MessageContourPoints message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageContourPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageContourPoints message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageContourPoints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageContourPoints;

                /**
                 * Decodes a MessageContourPoints message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageContourPoints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageContourPoints;

                /**
                 * Verifies a MessageContourPoints message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageContourPoints message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageContourPoints
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageContourPoints;

                /**
                 * Creates a plain object from a MessageContourPoints message. Also converts values to other types if specified.
                 * @param message MessageContourPoints
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageContourPoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageContourPoints to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageContourPoints
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTumorEditInfo. */
            interface IMessageTumorEditInfo {

                /** MessageTumorEditInfo MaskId */
                MaskId?: (number|null);

                /** MessageTumorEditInfo ContourInfos */
                ContourInfos?: (UIBot.UHOR.ProtoBuf.IMessageContourPoints[]|null);
            }

            /** Represents a MessageTumorEditInfo. */
            class MessageTumorEditInfo implements IMessageTumorEditInfo {

                /**
                 * Constructs a new MessageTumorEditInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorEditInfo);

                /** MessageTumorEditInfo MaskId. */
                public MaskId: number;

                /** MessageTumorEditInfo ContourInfos. */
                public ContourInfos: UIBot.UHOR.ProtoBuf.IMessageContourPoints[];

                /**
                 * Creates a new MessageTumorEditInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTumorEditInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorEditInfo): UIBot.UHOR.ProtoBuf.MessageTumorEditInfo;

                /**
                 * Encodes the specified MessageTumorEditInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorEditInfo.verify|verify} messages.
                 * @param message MessageTumorEditInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTumorEditInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTumorEditInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorEditInfo.verify|verify} messages.
                 * @param message MessageTumorEditInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTumorEditInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTumorEditInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTumorEditInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTumorEditInfo;

                /**
                 * Decodes a MessageTumorEditInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTumorEditInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTumorEditInfo;

                /**
                 * Verifies a MessageTumorEditInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTumorEditInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTumorEditInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTumorEditInfo;

                /**
                 * Creates a plain object from a MessageTumorEditInfo message. Also converts values to other types if specified.
                 * @param message MessageTumorEditInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTumorEditInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTumorEditInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTumorEditInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTumorExtractModelItem. */
            interface IMessageTumorExtractModelItem {

                /** MessageTumorExtractModelItem MaskLabel */
                MaskLabel: number;

                /** MessageTumorExtractModelItem info */
                info: UIBot.UHOR.ProtoBuf.IMessageTumorExtractInfo;
            }

            /** Represents a MessageTumorExtractModelItem. */
            class MessageTumorExtractModelItem implements IMessageTumorExtractModelItem {

                /**
                 * Constructs a new MessageTumorExtractModelItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModelItem);

                /** MessageTumorExtractModelItem MaskLabel. */
                public MaskLabel: number;

                /** MessageTumorExtractModelItem info. */
                public info: UIBot.UHOR.ProtoBuf.IMessageTumorExtractInfo;

                /**
                 * Creates a new MessageTumorExtractModelItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTumorExtractModelItem instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModelItem): UIBot.UHOR.ProtoBuf.MessageTumorExtractModelItem;

                /**
                 * Encodes the specified MessageTumorExtractModelItem message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorExtractModelItem.verify|verify} messages.
                 * @param message MessageTumorExtractModelItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModelItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTumorExtractModelItem message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorExtractModelItem.verify|verify} messages.
                 * @param message MessageTumorExtractModelItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModelItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTumorExtractModelItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTumorExtractModelItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTumorExtractModelItem;

                /**
                 * Decodes a MessageTumorExtractModelItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTumorExtractModelItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTumorExtractModelItem;

                /**
                 * Verifies a MessageTumorExtractModelItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTumorExtractModelItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTumorExtractModelItem
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTumorExtractModelItem;

                /**
                 * Creates a plain object from a MessageTumorExtractModelItem message. Also converts values to other types if specified.
                 * @param message MessageTumorExtractModelItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTumorExtractModelItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTumorExtractModelItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTumorExtractModelItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTumorExtractModel. */
            interface IMessageTumorExtractModel {

                /** MessageTumorExtractModel item */
                item?: (UIBot.UHOR.ProtoBuf.IMessageTumorExtractModelItem[]|null);
            }

            /** Represents a MessageTumorExtractModel. */
            class MessageTumorExtractModel implements IMessageTumorExtractModel {

                /**
                 * Constructs a new MessageTumorExtractModel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModel);

                /** MessageTumorExtractModel item. */
                public item: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModelItem[];

                /**
                 * Creates a new MessageTumorExtractModel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTumorExtractModel instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModel): UIBot.UHOR.ProtoBuf.MessageTumorExtractModel;

                /**
                 * Encodes the specified MessageTumorExtractModel message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorExtractModel.verify|verify} messages.
                 * @param message MessageTumorExtractModel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTumorExtractModel message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorExtractModel.verify|verify} messages.
                 * @param message MessageTumorExtractModel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTumorExtractModel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTumorExtractModel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTumorExtractModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTumorExtractModel;

                /**
                 * Decodes a MessageTumorExtractModel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTumorExtractModel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTumorExtractModel;

                /**
                 * Verifies a MessageTumorExtractModel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTumorExtractModel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTumorExtractModel
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTumorExtractModel;

                /**
                 * Creates a plain object from a MessageTumorExtractModel message. Also converts values to other types if specified.
                 * @param message MessageTumorExtractModel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTumorExtractModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTumorExtractModel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTumorExtractModel
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTumorExpandSimulation. */
            interface IMessageTumorExpandSimulation {

                /** MessageTumorExpandSimulation action */
                action: UIBot.UHOR.ProtoBuf.EnumTumorExpandSimulationAction;

                /** MessageTumorExpandSimulation iID */
                iID: number;

                /** MessageTumorExpandSimulation dDistance */
                dDistance: number;
            }

            /** Represents a MessageTumorExpandSimulation. */
            class MessageTumorExpandSimulation implements IMessageTumorExpandSimulation {

                /**
                 * Constructs a new MessageTumorExpandSimulation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorExpandSimulation);

                /** MessageTumorExpandSimulation action. */
                public action: UIBot.UHOR.ProtoBuf.EnumTumorExpandSimulationAction;

                /** MessageTumorExpandSimulation iID. */
                public iID: number;

                /** MessageTumorExpandSimulation dDistance. */
                public dDistance: number;

                /**
                 * Creates a new MessageTumorExpandSimulation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTumorExpandSimulation instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTumorExpandSimulation): UIBot.UHOR.ProtoBuf.MessageTumorExpandSimulation;

                /**
                 * Encodes the specified MessageTumorExpandSimulation message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorExpandSimulation.verify|verify} messages.
                 * @param message MessageTumorExpandSimulation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTumorExpandSimulation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTumorExpandSimulation message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTumorExpandSimulation.verify|verify} messages.
                 * @param message MessageTumorExpandSimulation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTumorExpandSimulation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTumorExpandSimulation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTumorExpandSimulation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTumorExpandSimulation;

                /**
                 * Decodes a MessageTumorExpandSimulation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTumorExpandSimulation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTumorExpandSimulation;

                /**
                 * Verifies a MessageTumorExpandSimulation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTumorExpandSimulation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTumorExpandSimulation
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTumorExpandSimulation;

                /**
                 * Creates a plain object from a MessageTumorExpandSimulation message. Also converts values to other types if specified.
                 * @param message MessageTumorExpandSimulation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTumorExpandSimulation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTumorExpandSimulation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTumorExpandSimulation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageMultiPointConnect. */
            interface IMessageMultiPointConnect {

                /** MessageMultiPointConnect PointsVector */
                PointsVector?: (UIBot.UHOR.ProtoBuf.IPoint2DInt[]|null);
            }

            /** Represents a MessageMultiPointConnect. */
            class MessageMultiPointConnect implements IMessageMultiPointConnect {

                /**
                 * Constructs a new MessageMultiPointConnect.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageMultiPointConnect);

                /** MessageMultiPointConnect PointsVector. */
                public PointsVector: UIBot.UHOR.ProtoBuf.IPoint2DInt[];

                /**
                 * Creates a new MessageMultiPointConnect instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageMultiPointConnect instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageMultiPointConnect): UIBot.UHOR.ProtoBuf.MessageMultiPointConnect;

                /**
                 * Encodes the specified MessageMultiPointConnect message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageMultiPointConnect.verify|verify} messages.
                 * @param message MessageMultiPointConnect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageMultiPointConnect, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageMultiPointConnect message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageMultiPointConnect.verify|verify} messages.
                 * @param message MessageMultiPointConnect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageMultiPointConnect, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageMultiPointConnect message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageMultiPointConnect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageMultiPointConnect;

                /**
                 * Decodes a MessageMultiPointConnect message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageMultiPointConnect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageMultiPointConnect;

                /**
                 * Verifies a MessageMultiPointConnect message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageMultiPointConnect message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageMultiPointConnect
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageMultiPointConnect;

                /**
                 * Creates a plain object from a MessageMultiPointConnect message. Also converts values to other types if specified.
                 * @param message MessageMultiPointConnect
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageMultiPointConnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageMultiPointConnect to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageMultiPointConnect
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BrainAltlasesInfo. */
            interface IBrainAltlasesInfo {

                /** BrainAltlasesInfo BrainAltlasesType */
                BrainAltlasesType: string;
            }

            /** Represents a BrainAltlasesInfo. */
            class BrainAltlasesInfo implements IBrainAltlasesInfo {

                /**
                 * Constructs a new BrainAltlasesInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IBrainAltlasesInfo);

                /** BrainAltlasesInfo BrainAltlasesType. */
                public BrainAltlasesType: string;

                /**
                 * Creates a new BrainAltlasesInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BrainAltlasesInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IBrainAltlasesInfo): UIBot.UHOR.ProtoBuf.BrainAltlasesInfo;

                /**
                 * Encodes the specified BrainAltlasesInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BrainAltlasesInfo.verify|verify} messages.
                 * @param message BrainAltlasesInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IBrainAltlasesInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BrainAltlasesInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BrainAltlasesInfo.verify|verify} messages.
                 * @param message BrainAltlasesInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IBrainAltlasesInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BrainAltlasesInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BrainAltlasesInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.BrainAltlasesInfo;

                /**
                 * Decodes a BrainAltlasesInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BrainAltlasesInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.BrainAltlasesInfo;

                /**
                 * Verifies a BrainAltlasesInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BrainAltlasesInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BrainAltlasesInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.BrainAltlasesInfo;

                /**
                 * Creates a plain object from a BrainAltlasesInfo message. Also converts values to other types if specified.
                 * @param message BrainAltlasesInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.BrainAltlasesInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BrainAltlasesInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BrainAltlasesInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BrickMPRInfo. */
            interface IBrickMPRInfo {

                /** BrickMPRInfo BrickMPRCornerPoints */
                BrickMPRCornerPoints?: (UIBot.UHOR.ProtoBuf.IPoint2DInt[]|null);
            }

            /** Represents a BrickMPRInfo. */
            class BrickMPRInfo implements IBrickMPRInfo {

                /**
                 * Constructs a new BrickMPRInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IBrickMPRInfo);

                /** BrickMPRInfo BrickMPRCornerPoints. */
                public BrickMPRCornerPoints: UIBot.UHOR.ProtoBuf.IPoint2DInt[];

                /**
                 * Creates a new BrickMPRInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BrickMPRInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IBrickMPRInfo): UIBot.UHOR.ProtoBuf.BrickMPRInfo;

                /**
                 * Encodes the specified BrickMPRInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BrickMPRInfo.verify|verify} messages.
                 * @param message BrickMPRInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IBrickMPRInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BrickMPRInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BrickMPRInfo.verify|verify} messages.
                 * @param message BrickMPRInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IBrickMPRInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BrickMPRInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BrickMPRInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.BrickMPRInfo;

                /**
                 * Decodes a BrickMPRInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BrickMPRInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.BrickMPRInfo;

                /**
                 * Verifies a BrickMPRInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BrickMPRInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BrickMPRInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.BrickMPRInfo;

                /**
                 * Creates a plain object from a BrickMPRInfo message. Also converts values to other types if specified.
                 * @param message BrickMPRInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.BrickMPRInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BrickMPRInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BrickMPRInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BrainAltlasesVisibleInfo. */
            interface IBrainAltlasesVisibleInfo {

                /** BrainAltlasesVisibleInfo BrainAltlasesType */
                BrainAltlasesType: string;

                /** BrainAltlasesVisibleInfo BrainAltlasesVisible */
                BrainAltlasesVisible: boolean;
            }

            /** Represents a BrainAltlasesVisibleInfo. */
            class BrainAltlasesVisibleInfo implements IBrainAltlasesVisibleInfo {

                /**
                 * Constructs a new BrainAltlasesVisibleInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IBrainAltlasesVisibleInfo);

                /** BrainAltlasesVisibleInfo BrainAltlasesType. */
                public BrainAltlasesType: string;

                /** BrainAltlasesVisibleInfo BrainAltlasesVisible. */
                public BrainAltlasesVisible: boolean;

                /**
                 * Creates a new BrainAltlasesVisibleInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BrainAltlasesVisibleInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IBrainAltlasesVisibleInfo): UIBot.UHOR.ProtoBuf.BrainAltlasesVisibleInfo;

                /**
                 * Encodes the specified BrainAltlasesVisibleInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BrainAltlasesVisibleInfo.verify|verify} messages.
                 * @param message BrainAltlasesVisibleInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IBrainAltlasesVisibleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BrainAltlasesVisibleInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.BrainAltlasesVisibleInfo.verify|verify} messages.
                 * @param message BrainAltlasesVisibleInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IBrainAltlasesVisibleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BrainAltlasesVisibleInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BrainAltlasesVisibleInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.BrainAltlasesVisibleInfo;

                /**
                 * Decodes a BrainAltlasesVisibleInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BrainAltlasesVisibleInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.BrainAltlasesVisibleInfo;

                /**
                 * Verifies a BrainAltlasesVisibleInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BrainAltlasesVisibleInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BrainAltlasesVisibleInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.BrainAltlasesVisibleInfo;

                /**
                 * Creates a plain object from a BrainAltlasesVisibleInfo message. Also converts values to other types if specified.
                 * @param message BrainAltlasesVisibleInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.BrainAltlasesVisibleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BrainAltlasesVisibleInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BrainAltlasesVisibleInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ACPCIHPoints. */
            interface IACPCIHPoints {

                /** ACPCIHPoints ThreePairPoints */
                ThreePairPoints?: (UIBot.UHOR.ProtoBuf.IPoint2DInt[]|null);
            }

            /** Represents a ACPCIHPoints. */
            class ACPCIHPoints implements IACPCIHPoints {

                /**
                 * Constructs a new ACPCIHPoints.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IACPCIHPoints);

                /** ACPCIHPoints ThreePairPoints. */
                public ThreePairPoints: UIBot.UHOR.ProtoBuf.IPoint2DInt[];

                /**
                 * Creates a new ACPCIHPoints instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ACPCIHPoints instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IACPCIHPoints): UIBot.UHOR.ProtoBuf.ACPCIHPoints;

                /**
                 * Encodes the specified ACPCIHPoints message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ACPCIHPoints.verify|verify} messages.
                 * @param message ACPCIHPoints message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IACPCIHPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ACPCIHPoints message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.ACPCIHPoints.verify|verify} messages.
                 * @param message ACPCIHPoints message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IACPCIHPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ACPCIHPoints message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ACPCIHPoints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.ACPCIHPoints;

                /**
                 * Decodes a ACPCIHPoints message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ACPCIHPoints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.ACPCIHPoints;

                /**
                 * Verifies a ACPCIHPoints message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ACPCIHPoints message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ACPCIHPoints
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.ACPCIHPoints;

                /**
                 * Creates a plain object from a ACPCIHPoints message. Also converts values to other types if specified.
                 * @param message ACPCIHPoints
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.ACPCIHPoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ACPCIHPoints to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ACPCIHPoints
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessagePlanningResult. */
            interface IMessagePlanningResult {

                /** MessagePlanningResult UserID */
                UserID: string;

                /** MessagePlanningResult PlanningResultName */
                PlanningResultName: string;
            }

            /** Represents a MessagePlanningResult. */
            class MessagePlanningResult implements IMessagePlanningResult {

                /**
                 * Constructs a new MessagePlanningResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessagePlanningResult);

                /** MessagePlanningResult UserID. */
                public UserID: string;

                /** MessagePlanningResult PlanningResultName. */
                public PlanningResultName: string;

                /**
                 * Creates a new MessagePlanningResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessagePlanningResult instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessagePlanningResult): UIBot.UHOR.ProtoBuf.MessagePlanningResult;

                /**
                 * Encodes the specified MessagePlanningResult message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessagePlanningResult.verify|verify} messages.
                 * @param message MessagePlanningResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessagePlanningResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessagePlanningResult message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessagePlanningResult.verify|verify} messages.
                 * @param message MessagePlanningResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessagePlanningResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessagePlanningResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessagePlanningResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessagePlanningResult;

                /**
                 * Decodes a MessagePlanningResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessagePlanningResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessagePlanningResult;

                /**
                 * Verifies a MessagePlanningResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessagePlanningResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessagePlanningResult
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessagePlanningResult;

                /**
                 * Creates a plain object from a MessagePlanningResult message. Also converts values to other types if specified.
                 * @param message MessagePlanningResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessagePlanningResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessagePlanningResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessagePlanningResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageCommonStringPair. */
            interface IMessageCommonStringPair {

                /** MessageCommonStringPair key */
                key: string;

                /** MessageCommonStringPair value */
                value?: (string|null);
            }

            /** Represents a MessageCommonStringPair. */
            class MessageCommonStringPair implements IMessageCommonStringPair {

                /**
                 * Constructs a new MessageCommonStringPair.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageCommonStringPair);

                /** MessageCommonStringPair key. */
                public key: string;

                /** MessageCommonStringPair value. */
                public value: string;

                /**
                 * Creates a new MessageCommonStringPair instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageCommonStringPair instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageCommonStringPair): UIBot.UHOR.ProtoBuf.MessageCommonStringPair;

                /**
                 * Encodes the specified MessageCommonStringPair message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageCommonStringPair.verify|verify} messages.
                 * @param message MessageCommonStringPair message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageCommonStringPair, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageCommonStringPair message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageCommonStringPair.verify|verify} messages.
                 * @param message MessageCommonStringPair message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageCommonStringPair, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageCommonStringPair message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageCommonStringPair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageCommonStringPair;

                /**
                 * Decodes a MessageCommonStringPair message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageCommonStringPair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageCommonStringPair;

                /**
                 * Verifies a MessageCommonStringPair message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageCommonStringPair message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageCommonStringPair
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageCommonStringPair;

                /**
                 * Creates a plain object from a MessageCommonStringPair message. Also converts values to other types if specified.
                 * @param message MessageCommonStringPair
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageCommonStringPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageCommonStringPair to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageCommonStringPair
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageCommonInfo. */
            interface IMessageCommonInfo {

                /** MessageCommonInfo StringPair */
                StringPair?: (UIBot.UHOR.ProtoBuf.IMessageCommonStringPair[]|null);
            }

            /** Represents a MessageCommonInfo. */
            class MessageCommonInfo implements IMessageCommonInfo {

                /**
                 * Constructs a new MessageCommonInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageCommonInfo);

                /** MessageCommonInfo StringPair. */
                public StringPair: UIBot.UHOR.ProtoBuf.IMessageCommonStringPair[];

                /**
                 * Creates a new MessageCommonInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageCommonInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageCommonInfo): UIBot.UHOR.ProtoBuf.MessageCommonInfo;

                /**
                 * Encodes the specified MessageCommonInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageCommonInfo.verify|verify} messages.
                 * @param message MessageCommonInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageCommonInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageCommonInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageCommonInfo.verify|verify} messages.
                 * @param message MessageCommonInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageCommonInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageCommonInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageCommonInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageCommonInfo;

                /**
                 * Decodes a MessageCommonInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageCommonInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageCommonInfo;

                /**
                 * Verifies a MessageCommonInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageCommonInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageCommonInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageCommonInfo;

                /**
                 * Creates a plain object from a MessageCommonInfo message. Also converts values to other types if specified.
                 * @param message MessageCommonInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageCommonInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageCommonInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageCommonInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageRegistrationType. */
            interface IMessageRegistrationType {

                /** MessageRegistrationType RegistrationType */
                RegistrationType: UIBot.UHOR.ProtoBuf.EnumRegistrationType;
            }

            /** Represents a MessageRegistrationType. */
            class MessageRegistrationType implements IMessageRegistrationType {

                /**
                 * Constructs a new MessageRegistrationType.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageRegistrationType);

                /** MessageRegistrationType RegistrationType. */
                public RegistrationType: UIBot.UHOR.ProtoBuf.EnumRegistrationType;

                /**
                 * Creates a new MessageRegistrationType instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageRegistrationType instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageRegistrationType): UIBot.UHOR.ProtoBuf.MessageRegistrationType;

                /**
                 * Encodes the specified MessageRegistrationType message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageRegistrationType.verify|verify} messages.
                 * @param message MessageRegistrationType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageRegistrationType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageRegistrationType message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageRegistrationType.verify|verify} messages.
                 * @param message MessageRegistrationType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageRegistrationType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageRegistrationType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageRegistrationType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageRegistrationType;

                /**
                 * Decodes a MessageRegistrationType message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageRegistrationType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageRegistrationType;

                /**
                 * Verifies a MessageRegistrationType message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageRegistrationType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageRegistrationType
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageRegistrationType;

                /**
                 * Creates a plain object from a MessageRegistrationType message. Also converts values to other types if specified.
                 * @param message MessageRegistrationType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageRegistrationType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageRegistrationType to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageRegistrationType
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTissueSelectedInfo. */
            interface IMessageTissueSelectedInfo {

                /** MessageTissueSelectedInfo sVolumeUID */
                sVolumeUID: string;

                /** MessageTissueSelectedInfo iTissueID */
                iTissueID: number;
            }

            /** Represents a MessageTissueSelectedInfo. */
            class MessageTissueSelectedInfo implements IMessageTissueSelectedInfo {

                /**
                 * Constructs a new MessageTissueSelectedInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueSelectedInfo);

                /** MessageTissueSelectedInfo sVolumeUID. */
                public sVolumeUID: string;

                /** MessageTissueSelectedInfo iTissueID. */
                public iTissueID: number;

                /**
                 * Creates a new MessageTissueSelectedInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTissueSelectedInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueSelectedInfo): UIBot.UHOR.ProtoBuf.MessageTissueSelectedInfo;

                /**
                 * Encodes the specified MessageTissueSelectedInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueSelectedInfo.verify|verify} messages.
                 * @param message MessageTissueSelectedInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTissueSelectedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTissueSelectedInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueSelectedInfo.verify|verify} messages.
                 * @param message MessageTissueSelectedInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTissueSelectedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTissueSelectedInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTissueSelectedInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTissueSelectedInfo;

                /**
                 * Decodes a MessageTissueSelectedInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTissueSelectedInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTissueSelectedInfo;

                /**
                 * Verifies a MessageTissueSelectedInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTissueSelectedInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTissueSelectedInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTissueSelectedInfo;

                /**
                 * Creates a plain object from a MessageTissueSelectedInfo message. Also converts values to other types if specified.
                 * @param message MessageTissueSelectedInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTissueSelectedInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTissueSelectedInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTissueSelectedInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTissueDefaultColorInfo. */
            interface IMessageTissueDefaultColorInfo {

                /** MessageTissueDefaultColorInfo ID */
                ID?: (number|null);

                /** MessageTissueDefaultColorInfo Color */
                Color?: (UIBot.UHOR.ProtoBuf.IMsgColor|null);
            }

            /** Represents a MessageTissueDefaultColorInfo. */
            class MessageTissueDefaultColorInfo implements IMessageTissueDefaultColorInfo {

                /**
                 * Constructs a new MessageTissueDefaultColorInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfo);

                /** MessageTissueDefaultColorInfo ID. */
                public ID: number;

                /** MessageTissueDefaultColorInfo Color. */
                public Color?: (UIBot.UHOR.ProtoBuf.IMsgColor|null);

                /**
                 * Creates a new MessageTissueDefaultColorInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTissueDefaultColorInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfo): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfo;

                /**
                 * Encodes the specified MessageTissueDefaultColorInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfo.verify|verify} messages.
                 * @param message MessageTissueDefaultColorInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTissueDefaultColorInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfo.verify|verify} messages.
                 * @param message MessageTissueDefaultColorInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTissueDefaultColorInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTissueDefaultColorInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfo;

                /**
                 * Decodes a MessageTissueDefaultColorInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTissueDefaultColorInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfo;

                /**
                 * Verifies a MessageTissueDefaultColorInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTissueDefaultColorInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTissueDefaultColorInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfo;

                /**
                 * Creates a plain object from a MessageTissueDefaultColorInfo message. Also converts values to other types if specified.
                 * @param message MessageTissueDefaultColorInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTissueDefaultColorInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTissueDefaultColorInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTissueDefaultColorInfoPair. */
            interface IMessageTissueDefaultColorInfoPair {

                /** MessageTissueDefaultColorInfoPair VolumeUID */
                VolumeUID?: (string|null);

                /** MessageTissueDefaultColorInfoPair TissueDefaultInfo */
                TissueDefaultInfo?: (UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfo[]|null);
            }

            /** Represents a MessageTissueDefaultColorInfoPair. */
            class MessageTissueDefaultColorInfoPair implements IMessageTissueDefaultColorInfoPair {

                /**
                 * Constructs a new MessageTissueDefaultColorInfoPair.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPair);

                /** MessageTissueDefaultColorInfoPair VolumeUID. */
                public VolumeUID: string;

                /** MessageTissueDefaultColorInfoPair TissueDefaultInfo. */
                public TissueDefaultInfo: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfo[];

                /**
                 * Creates a new MessageTissueDefaultColorInfoPair instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTissueDefaultColorInfoPair instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPair): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPair;

                /**
                 * Encodes the specified MessageTissueDefaultColorInfoPair message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPair.verify|verify} messages.
                 * @param message MessageTissueDefaultColorInfoPair message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPair, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTissueDefaultColorInfoPair message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPair.verify|verify} messages.
                 * @param message MessageTissueDefaultColorInfoPair message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPair, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTissueDefaultColorInfoPair message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTissueDefaultColorInfoPair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPair;

                /**
                 * Decodes a MessageTissueDefaultColorInfoPair message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTissueDefaultColorInfoPair
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPair;

                /**
                 * Verifies a MessageTissueDefaultColorInfoPair message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTissueDefaultColorInfoPair message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTissueDefaultColorInfoPair
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPair;

                /**
                 * Creates a plain object from a MessageTissueDefaultColorInfoPair message. Also converts values to other types if specified.
                 * @param message MessageTissueDefaultColorInfoPair
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTissueDefaultColorInfoPair to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTissueDefaultColorInfoPair
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageTissueDefaultColorInfoPairList. */
            interface IMessageTissueDefaultColorInfoPairList {

                /** MessageTissueDefaultColorInfoPairList TissueDefaultInfoPair */
                TissueDefaultInfoPair?: (UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPair[]|null);
            }

            /** Represents a MessageTissueDefaultColorInfoPairList. */
            class MessageTissueDefaultColorInfoPairList implements IMessageTissueDefaultColorInfoPairList {

                /**
                 * Constructs a new MessageTissueDefaultColorInfoPairList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPairList);

                /** MessageTissueDefaultColorInfoPairList TissueDefaultInfoPair. */
                public TissueDefaultInfoPair: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPair[];

                /**
                 * Creates a new MessageTissueDefaultColorInfoPairList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageTissueDefaultColorInfoPairList instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPairList): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPairList;

                /**
                 * Encodes the specified MessageTissueDefaultColorInfoPairList message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPairList.verify|verify} messages.
                 * @param message MessageTissueDefaultColorInfoPairList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPairList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageTissueDefaultColorInfoPairList message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPairList.verify|verify} messages.
                 * @param message MessageTissueDefaultColorInfoPairList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageTissueDefaultColorInfoPairList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageTissueDefaultColorInfoPairList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageTissueDefaultColorInfoPairList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPairList;

                /**
                 * Decodes a MessageTissueDefaultColorInfoPairList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageTissueDefaultColorInfoPairList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPairList;

                /**
                 * Verifies a MessageTissueDefaultColorInfoPairList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageTissueDefaultColorInfoPairList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageTissueDefaultColorInfoPairList
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPairList;

                /**
                 * Creates a plain object from a MessageTissueDefaultColorInfoPairList message. Also converts values to other types if specified.
                 * @param message MessageTissueDefaultColorInfoPairList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageTissueDefaultColorInfoPairList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageTissueDefaultColorInfoPairList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageTissueDefaultColorInfoPairList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageMeasureLineInfo. */
            interface IMessageMeasureLineInfo {

                /** MessageMeasureLineInfo ID */
                ID: number;

                /** MessageMeasureLineInfo MeasureLineInfo */
                MeasureLineInfo: string;
            }

            /** Represents a MessageMeasureLineInfo. */
            class MessageMeasureLineInfo implements IMessageMeasureLineInfo {

                /**
                 * Constructs a new MessageMeasureLineInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageMeasureLineInfo);

                /** MessageMeasureLineInfo ID. */
                public ID: number;

                /** MessageMeasureLineInfo MeasureLineInfo. */
                public MeasureLineInfo: string;

                /**
                 * Creates a new MessageMeasureLineInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageMeasureLineInfo instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageMeasureLineInfo): UIBot.UHOR.ProtoBuf.MessageMeasureLineInfo;

                /**
                 * Encodes the specified MessageMeasureLineInfo message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageMeasureLineInfo.verify|verify} messages.
                 * @param message MessageMeasureLineInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageMeasureLineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageMeasureLineInfo message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageMeasureLineInfo.verify|verify} messages.
                 * @param message MessageMeasureLineInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageMeasureLineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageMeasureLineInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageMeasureLineInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageMeasureLineInfo;

                /**
                 * Decodes a MessageMeasureLineInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageMeasureLineInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageMeasureLineInfo;

                /**
                 * Verifies a MessageMeasureLineInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageMeasureLineInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageMeasureLineInfo
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageMeasureLineInfo;

                /**
                 * Creates a plain object from a MessageMeasureLineInfo message. Also converts values to other types if specified.
                 * @param message MessageMeasureLineInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageMeasureLineInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageMeasureLineInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageMeasureLineInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageMeasureLineList. */
            interface IMessageMeasureLineList {

                /** MessageMeasureLineList MeasureLineList */
                MeasureLineList?: (UIBot.UHOR.ProtoBuf.IMessageMeasureLineInfo[]|null);
            }

            /** Represents a MessageMeasureLineList. */
            class MessageMeasureLineList implements IMessageMeasureLineList {

                /**
                 * Constructs a new MessageMeasureLineList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessageMeasureLineList);

                /** MessageMeasureLineList MeasureLineList. */
                public MeasureLineList: UIBot.UHOR.ProtoBuf.IMessageMeasureLineInfo[];

                /**
                 * Creates a new MessageMeasureLineList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageMeasureLineList instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessageMeasureLineList): UIBot.UHOR.ProtoBuf.MessageMeasureLineList;

                /**
                 * Encodes the specified MessageMeasureLineList message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageMeasureLineList.verify|verify} messages.
                 * @param message MessageMeasureLineList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessageMeasureLineList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageMeasureLineList message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessageMeasureLineList.verify|verify} messages.
                 * @param message MessageMeasureLineList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessageMeasureLineList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageMeasureLineList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageMeasureLineList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessageMeasureLineList;

                /**
                 * Decodes a MessageMeasureLineList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageMeasureLineList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessageMeasureLineList;

                /**
                 * Verifies a MessageMeasureLineList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageMeasureLineList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageMeasureLineList
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessageMeasureLineList;

                /**
                 * Creates a plain object from a MessageMeasureLineList message. Also converts values to other types if specified.
                 * @param message MessageMeasureLineList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessageMeasureLineList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageMeasureLineList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageMeasureLineList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Message2DPoint. */
            interface IMessage2DPoint {

                /** Message2DPoint x */
                x: number;

                /** Message2DPoint y */
                y: number;
            }

            /** Represents a Message2DPoint. */
            class Message2DPoint implements IMessage2DPoint {

                /**
                 * Constructs a new Message2DPoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessage2DPoint);

                /** Message2DPoint x. */
                public x: number;

                /** Message2DPoint y. */
                public y: number;

                /**
                 * Creates a new Message2DPoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Message2DPoint instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessage2DPoint): UIBot.UHOR.ProtoBuf.Message2DPoint;

                /**
                 * Encodes the specified Message2DPoint message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.Message2DPoint.verify|verify} messages.
                 * @param message Message2DPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessage2DPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Message2DPoint message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.Message2DPoint.verify|verify} messages.
                 * @param message Message2DPoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessage2DPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Message2DPoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Message2DPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.Message2DPoint;

                /**
                 * Decodes a Message2DPoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Message2DPoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.Message2DPoint;

                /**
                 * Verifies a Message2DPoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Message2DPoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Message2DPoint
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.Message2DPoint;

                /**
                 * Creates a plain object from a Message2DPoint message. Also converts values to other types if specified.
                 * @param message Message2DPoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.Message2DPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Message2DPoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Message2DPoint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessagePointInfoAndMosueState. */
            interface IMessagePointInfoAndMosueState {

                /** MessagePointInfoAndMosueState DistanceLabelPos */
                DistanceLabelPos?: (UIBot.UHOR.ProtoBuf.IMessage2DPoint|null);

                /** MessagePointInfoAndMosueState MouseState */
                MouseState: string;
            }

            /** Represents a MessagePointInfoAndMosueState. */
            class MessagePointInfoAndMosueState implements IMessagePointInfoAndMosueState {

                /**
                 * Constructs a new MessagePointInfoAndMosueState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: UIBot.UHOR.ProtoBuf.IMessagePointInfoAndMosueState);

                /** MessagePointInfoAndMosueState DistanceLabelPos. */
                public DistanceLabelPos?: (UIBot.UHOR.ProtoBuf.IMessage2DPoint|null);

                /** MessagePointInfoAndMosueState MouseState. */
                public MouseState: string;

                /**
                 * Creates a new MessagePointInfoAndMosueState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessagePointInfoAndMosueState instance
                 */
                public static create(properties?: UIBot.UHOR.ProtoBuf.IMessagePointInfoAndMosueState): UIBot.UHOR.ProtoBuf.MessagePointInfoAndMosueState;

                /**
                 * Encodes the specified MessagePointInfoAndMosueState message. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessagePointInfoAndMosueState.verify|verify} messages.
                 * @param message MessagePointInfoAndMosueState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: UIBot.UHOR.ProtoBuf.IMessagePointInfoAndMosueState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessagePointInfoAndMosueState message, length delimited. Does not implicitly {@link UIBot.UHOR.ProtoBuf.MessagePointInfoAndMosueState.verify|verify} messages.
                 * @param message MessagePointInfoAndMosueState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: UIBot.UHOR.ProtoBuf.IMessagePointInfoAndMosueState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessagePointInfoAndMosueState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessagePointInfoAndMosueState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UIBot.UHOR.ProtoBuf.MessagePointInfoAndMosueState;

                /**
                 * Decodes a MessagePointInfoAndMosueState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessagePointInfoAndMosueState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UIBot.UHOR.ProtoBuf.MessagePointInfoAndMosueState;

                /**
                 * Verifies a MessagePointInfoAndMosueState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessagePointInfoAndMosueState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessagePointInfoAndMosueState
                 */
                public static fromObject(object: { [k: string]: any }): UIBot.UHOR.ProtoBuf.MessagePointInfoAndMosueState;

                /**
                 * Creates a plain object from a MessagePointInfoAndMosueState message. Also converts values to other types if specified.
                 * @param message MessagePointInfoAndMosueState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: UIBot.UHOR.ProtoBuf.MessagePointInfoAndMosueState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessagePointInfoAndMosueState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessagePointInfoAndMosueState
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
